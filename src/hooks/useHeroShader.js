import { useEffect } from 'react'
import * as THREE from 'three'

const VERTEX = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

const FRAGMENT = `
  precision highp float;
  varying vec2 vUv;

  uniform vec2  uRes;
  uniform vec2  uMouse;
  uniform float uTime;
  uniform float uScroll;
  uniform float uVelocity;
  uniform float uIntensity;
  uniform float uHueShift;
  uniform vec3  uColorA;
  uniform vec3  uColorB;
  uniform vec3  uColorC;
  uniform vec3  uColorD;

  vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(dot(hash(i + vec2(0.0,0.0)), f - vec2(0.0,0.0)),
          dot(hash(i + vec2(1.0,0.0)), f - vec2(1.0,0.0)), u.x),
      mix(dot(hash(i + vec2(0.0,1.0)), f - vec2(0.0,1.0)),
          dot(hash(i + vec2(1.0,1.0)), f - vec2(1.0,1.0)), u.x),
      u.y);
  }
  /* 3 octaves instead of 5 — ~40% less GPU work, visually identical */
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 3; i++) {
      v += a * noise(p);
      p *= 2.07;
      a *= 0.5;
    }
    return v;
  }
  float field(vec2 p, float t) {
    vec2 q = vec2(fbm(p + vec2(0.0, t * 0.18)),
                  fbm(p + vec2(5.2, 1.3) + t * 0.12));
    vec2 r = vec2(fbm(p + 4.0 * q + vec2(1.7, 9.2) + t * 0.15),
                  fbm(p + 4.0 * q + vec2(8.3, 2.8) - t * 0.13));
    return fbm(p + 4.0 * r);
  }
  float sampleField(vec2 uv, vec2 offset) {
    vec2 p = (uv - 0.5);
    p.x *= uRes.x / uRes.y;
    p *= 1.35;
    p += offset;
    vec2 m = uMouse - 0.5;
    m.x *= uRes.x / uRes.y;
    float md = length(p - m * 1.2);
    p += (m - p) * 0.18 * smoothstep(1.2, 0.0, md);
    float t = uTime * 0.35 + uScroll * 2.4;
    float f = field(p * 1.15, t);
    return f;
  }

  void main() {
    vec2 uv = vUv;
    float splitAmt = (0.006 + abs(uVelocity) * 0.012) * uIntensity;
    vec2 dir = normalize(uMouse - 0.5 + 0.0001);
    vec2 splitOff = dir * splitAmt;

    float fr = sampleField(uv + splitOff, vec2(0.0));
    float fg = sampleField(uv,            vec2(0.0));
    float fb = sampleField(uv - splitOff, vec2(0.0));

    vec3 c1 = mix(uColorC, uColorB, smoothstep(-0.2, 0.55, fg));
    vec3 c2 = mix(c1, uColorA, smoothstep(0.05, 0.78, fg));
    c2 = mix(c2, uColorD, smoothstep(0.85, 1.0, fg) * 0.4);

    vec3 col = c2;

    /* Warm amber ember — orange counterpoint to the cool blue field */
    float wDist = length((uv - vec2(0.22, 0.18)) * vec2(0.85, 1.3));
    float wGlow = smoothstep(0.95, 0.0, wDist);
    col += uColorA * wGlow * 0.22;
    col.r *= 1.0 + (fr - fg) * 1.4;
    col.b *= 1.0 + (fb - fg) * 1.4;

    float vig = smoothstep(1.25, 0.4, length(uv - 0.5));
    col *= mix(0.65, 1.0, vig);

    col = mix(col, col.brg, clamp(uHueShift, 0.0, 1.0));

    float g = (fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5) - 0.5) * 0.04;
    col += g;

    col = mix(col, col * 1.06,
      smoothstep(0.45, 0.95, uv.x) * smoothstep(0.65, 0.95, 1.0 - uv.y) * 0.3);

    gl_FragColor = vec4(col, 1.0);
  }
`

export function useHeroShader(containerRef, shaderRef) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Skip WebGL on phones — CSS animated gradient takes over (see Hero.css)
    if (window.matchMedia('(max-width: 768px)').matches) return

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    // Tablets get DPR capped at 1.0 to halve fragment shader work
    const isTablet = window.matchMedia('(max-width: 1024px)').matches
    const dpr = Math.min(window.devicePixelRatio, isTablet ? 1.0 : 1.5)

    const renderer = new THREE.WebGLRenderer({
      antialias: !isTablet,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(dpr)
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    const uniforms = {
      uTime:        { value: 0 },
      uRes:         { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
      uMouse:       { value: new THREE.Vector2(0.5, 0.5) },
      uMouseTarget: { value: new THREE.Vector2(0.5, 0.5) },
      uScroll:      { value: 0 },
      uVelocity:    { value: 0 },
      uIntensity:   { value: 1.0 },
      uHueShift:    { value: 0.0 },
      uColorA:      { value: new THREE.Color('#ff5a1f') },
      uColorB:      { value: new THREE.Color('#1f3a8a') },
      uColorC:      { value: new THREE.Color('#06091a') },
      uColorD:      { value: new THREE.Color('#efe8d8') },
    }

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
    })

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)
    scene.add(mesh)

    const targetMouse = uniforms.uMouseTarget.value
    const liveMouse = uniforms.uMouse.value

    const onMouseMove = (e) => {
      targetMouse.x = e.clientX / window.innerWidth
      targetMouse.y = 1.0 - e.clientY / window.innerHeight
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    const onResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h, false)
      uniforms.uRes.value.set(w, h)
    }
    window.addEventListener('resize', onResize)

    const clock = new THREE.Clock()
    let velocityDecay = 0
    let rafId
    let isVisible = true

    // Pause the WebGL render loop when the hero is off-screen.
    // This is the single biggest perf win — stops the heavy shader
    // from consuming GPU cycles while the user is scrolled down.
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting },
      { threshold: 0.01 }
    )
    observer.observe(container)

    function tick() {
      rafId = requestAnimationFrame(tick)
      if (!isVisible) return
      const dt = clock.getDelta()
      uniforms.uTime.value += dt
      liveMouse.x += (targetMouse.x - liveMouse.x) * 0.08
      liveMouse.y += (targetMouse.y - liveMouse.y) * 0.08
      velocityDecay *= 0.92
      uniforms.uVelocity.value += (velocityDecay - uniforms.uVelocity.value) * 0.18
      renderer.render(scene, camera)
    }
    tick()

    const api = {
      uniforms,
      setVelocity(v) { velocityDecay = v },
      setIntensity(v) { uniforms.uIntensity.value = v },
      setHueShift(v) { uniforms.uHueShift.value = v },
      setPalette(pal) {
        uniforms.uColorA.value.set(pal.a)
        uniforms.uColorB.value.set(pal.b)
        uniforms.uColorC.value.set(pal.c)
        uniforms.uColorD.value.set(pal.d)
      },
    }

    if (shaderRef) shaderRef.current = api

    return () => {
      cancelAnimationFrame(rafId)
      observer.disconnect()
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      material.dispose()
      mesh.geometry.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      if (shaderRef) shaderRef.current = null
    }
  }, [containerRef, shaderRef])
}
