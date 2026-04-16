import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const NeuralPulseMatrix: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (navigator.userAgent.includes('jsdom')) return
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Colors - pulling from project variables conceptually
    const colorPrimary = new THREE.Color('#D97706') // Amber
    const colorSecondary = new THREE.Color('#F59E0B') // Warm Glow
    const colorAccent = new THREE.Color('#3B82F6') // Blue accent

    // --- 1. THE GRID FLOOR (Digital Foundation) ---
    const gridCount = 40
    const gridSpacing = 2
    const gridGeometry = new THREE.BufferGeometry()
    const gridPositions = new Float32Array(gridCount * gridCount * 3)
    
    for (let i = 0; i < gridCount; i++) {
      for (let j = 0; j < gridCount; j++) {
        const x = (i - gridCount / 2) * gridSpacing
        const z = (j - gridCount / 2) * gridSpacing
        const idx = (i * gridCount + j) * 3
        gridPositions[idx] = x
        gridPositions[idx + 1] = -10 // Floor level
        gridPositions[idx + 2] = z
      }
    }
    gridGeometry.setAttribute('position', new THREE.BufferAttribute(gridPositions, 3))
    
    const gridMaterial = new THREE.PointsMaterial({
      color: colorPrimary,
      size: 0.1,
      transparent: true,
      opacity: 0.3,
    })
    const gridPoints = new THREE.Points(gridGeometry, gridMaterial)
    scene.add(gridPoints)

    // --- 2. NEURAL FILAMENTS (Flowing Data) ---
    const filamentCount = 40
    const filaments: { line: THREE.Line; points: THREE.Vector3[] }[] = []
    const pulseGeometry = new THREE.SphereGeometry(0.1, 8, 8)
    const pulses: { mesh: THREE.Mesh; curve: THREE.CatmullRomCurve3; progress: number; speed: number }[] = []
    
    for (let i = 0; i < filamentCount; i++) {
      const points = []
      const startX = (Math.random() - 0.5) * 60
      const startY = (Math.random() - 0.5) * 40
      const startZ = (Math.random() - 0.5) * 30
      
      for (let j = 0; j < 6; j++) {
        points.push(new THREE.Vector3(
          startX + (Math.random() - 0.5) * 15,
          startY + (Math.random() - 0.5) * 15,
          startZ + (Math.random() - 0.5) * 15
        ))
      }
      
      const curve = new THREE.CatmullRomCurve3(points)
      const curvePoints = curve.getPoints(50)
      const geometry = new THREE.BufferGeometry().setFromPoints(curvePoints)
      
      const material = new THREE.LineBasicMaterial({
        color: i % 5 === 0 ? colorAccent : colorPrimary,
        transparent: true,
        opacity: 0.15,
      })
      
      const line = new THREE.Line(geometry, material)
      filaments.push({ line, points })
      scene.add(line)

      // Add pulses to some filaments
      if (Math.random() > 0.6) {
        const pulseMaterial = new THREE.MeshBasicMaterial({
          color: i % 5 === 0 ? colorAccent : colorSecondary,
          transparent: true,
          opacity: 0.8,
        })
        const pulseMesh = new THREE.Mesh(pulseGeometry, pulseMaterial)
        pulses.push({
          mesh: pulseMesh,
          curve,
          progress: Math.random(),
          speed: 0.001 + Math.random() * 0.003
        })
        scene.add(pulseMesh)
      }
    }

    // --- 3. FLOATING DATA NODES (Intelligence Units) ---
    const nodeCount = 100
    const nodesGeometry = new THREE.BufferGeometry()
    const nodesPos = new Float32Array(nodeCount * 3)
    const nodesVel = new Float32Array(nodeCount * 3)
    
    for (let i = 0; i < nodeCount; i++) {
      nodesPos[i * 3] = (Math.random() - 0.5) * 60
      nodesPos[i * 3 + 1] = (Math.random() - 0.5) * 40
      nodesPos[i * 3 + 2] = (Math.random() - 0.5) * 30
      
      nodesVel[i * 3] = (Math.random() - 0.5) * 0.05
      nodesVel[i * 3 + 1] = (Math.random() - 0.5) * 0.05
      nodesVel[i * 3 + 2] = (Math.random() - 0.5) * 0.05
    }
    
    nodesGeometry.setAttribute('position', new THREE.BufferAttribute(nodesPos, 3))
    
    const nodesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: colorPrimary },
        mouse: { value: new THREE.Vector2(0, 0) }
      },
      vertexShader: `
        uniform float time;
        uniform vec2 mouse;
        varying float vAlpha;
        void main() {
          vec3 pos = position;
          pos.y += sin(time * 0.5 + pos.x * 0.1) * 2.0;
          pos.x += cos(time * 0.3 + pos.y * 0.1) * 2.0;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = 4.0 * (40.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
          vAlpha = smoothstep(0.0, 1.0, 1.0 - (length(pos.xy - mouse * 30.0) / 40.0));
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          gl_FragColor = vec4(color, vAlpha * (1.0 - d * 2.0));
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
    
    const nodes = new THREE.Points(nodesGeometry, nodesMaterial)
    scene.add(nodes)

    // --- Interaction ---
    const mouse = new THREE.Vector2(0, 0)
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
      nodesMaterial.uniforms.mouse.value.copy(mouse)
    }
    window.addEventListener('mousemove', handleMouseMove)

    // --- Animation ---
    const clock = new THREE.Clock()
    let frameId: number

    const animate = () => {
      clock.getDelta()
      const elapsed = clock.getElapsedTime()
      
      nodesMaterial.uniforms.time.value = elapsed
      
      // Move filaments slightly
      filaments.forEach((f, i) => {
        f.line.rotation.y = Math.sin(elapsed * 0.1 + i) * 0.1
        f.line.rotation.x = Math.cos(elapsed * 0.15 + i) * 0.1
        f.line.position.y += Math.sin(elapsed + i) * 0.01
      })

      // Update pulses
      pulses.forEach(p => {
        p.progress += p.speed
        if (p.progress > 1) p.progress = 0
        const pos = p.curve.getPointAt(p.progress)
        p.mesh.position.copy(pos)
      })
      
      // Update grid floor to simulate movement
      const posAttr = gridGeometry.attributes.position as THREE.BufferAttribute
      for (let i = 0; i < gridCount; i++) {
        for (let j = 0; j < gridCount; j++) {
          const idx = (i * gridCount + j) * 3
          const x = posAttr.getX(idx)
          const z = posAttr.getZ(idx)
          const h = Math.sin(x * 0.2 + elapsed) * Math.cos(z * 0.2 + elapsed) * 1.5
          posAttr.setY(idx, -10 + h)
        }
      }
      posAttr.needsUpdate = true

      // Camera parallax
      camera.position.x += (mouse.x * 5 - camera.position.x) * 0.02
      camera.position.y += (mouse.y * 5 - camera.position.y) * 0.02
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    animate()

    // Resize
    const handleResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
      gridGeometry.dispose()
      gridMaterial.dispose()
      nodesGeometry.dispose()
      nodesMaterial.dispose()
      pulseGeometry.dispose()
      filaments.forEach(f => {
        f.line.geometry.dispose()
        ;(f.line.material as THREE.Material).dispose()
      })
      pulses.forEach(p => {
        ;(p.mesh.material as THREE.Material).dispose()
      })
    }
  }, [])

  return (
    <div ref={containerRef} className={`absolute inset-0 z-0 pointer-events-none ${className}`}>
      {/* CSS Overlays for "Advanced Level" Look */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-base)]/20 to-[var(--bg-base)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 2px)', backgroundSize: '100% 3px' }} />
    </div>
  )
}

export default NeuralPulseMatrix
