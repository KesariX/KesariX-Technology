import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const AIVisualization: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [themeColors, setThemeColors] = useState({
    accentPrimary: '#D97706', // Default to brand amber
    accentGlow: '#F59E0B',
  })

  useEffect(() => {
    const root = document.documentElement
    const computedStyle = getComputedStyle(root)

    const accentPrimary = computedStyle.getPropertyValue('--accent-primary')?.trim() || '#D97706'
    const accentGlow = computedStyle.getPropertyValue('--accent-glow')?.trim() || '#F59E0B'

    setThemeColors({ accentPrimary, accentGlow })
  }, [])

  useEffect(() => {
    if (navigator.userAgent.includes('jsdom')) return
    if (!containerRef.current) return

    const isMobile = window.innerWidth < 768 || navigator.maxTouchPoints > 0
    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 25

    const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2))
    container.appendChild(renderer.domElement)

    const primaryColor = new THREE.Color(themeColors.accentPrimary)
    const glowColor = new THREE.Color(themeColors.accentGlow)

    // Reduce counts on mobile for performance
    const particleCount = isMobile ? 800 : 5000
    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    const particleColors = new Float32Array(particleCount * 3)
    const particleSizes = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      const radius = 10 + Math.random() * 15
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      particlePositions[i * 3 + 2] = radius * Math.cos(phi) - 10 // Move back a bit

      const mixedColor = primaryColor.clone().lerp(glowColor, Math.random())
      if (Math.random() > 0.9) mixedColor.lerp(new THREE.Color('#3B82F6'), 0.5) // Sprinkle of blue

      particleColors[i * 3] = mixedColor.r
      particleColors[i * 3 + 1] = mixedColor.g
      particleColors[i * 3 + 2] = mixedColor.b

      particleSizes[i] = Math.random() * 2.5 + 1
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3))
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1))

    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        uniform float time;
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec3 pos = position;
          float displacement = sin(pos.x + time * 0.4) * 0.5 + cos(pos.y + time * 0.3) * 0.5;
          pos.z += displacement;
          pos.x += cos(time * 0.2 + pos.y) * 0.5;
          pos.y += sin(time * 0.2 + pos.x) * 0.5;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (30.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.45) discard;
          float alpha = 1.0 - smoothstep(0.3, 0.45, dist);
          gl_FragColor = vec4(vColor, alpha * 0.9);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    })

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particleSystem)

    // --- Nodes System ---
    const nodeCount = isMobile ? 20 : 70
    const nodesGroup = new THREE.Group()
    scene.add(nodesGroup)
    const nodeVelocities: THREE.Vector3[] = []
    const nodeOriginalPositions: THREE.Vector3[] = []
    const nodeOriginalColors: THREE.Color[] = []

    const nodeGeometry = new THREE.IcosahedronGeometry(0.2, 3)

    for (let i = 0; i < nodeCount; i++) {
      const radius = 12 + Math.random() * 8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const pos = new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi) - 10
      )

      const originalNodeColor = primaryColor.clone().lerp(glowColor, Math.random())
      nodeOriginalColors.push(originalNodeColor)

      const nodeMaterial = new THREE.MeshStandardMaterial({
        color: originalNodeColor.clone(),
        emissive: primaryColor,
        emissiveIntensity: 0.4,
        metalness: 0.2,
        roughness: 0.5,
      })

      const nodeMesh = new THREE.Mesh(nodeGeometry, nodeMaterial)
      nodeMesh.position.copy(pos)
      nodesGroup.add(nodeMesh)

      nodeOriginalPositions.push(pos.clone())
      nodeVelocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        )
      )
    }

    // --- Dynamic Lines ---
    const lineGeometry = new THREE.BufferGeometry()
    const maxLines = nodeCount * 6
    const linePositions = new Float32Array(maxLines * 3 * 2)
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    const lineMaterial = new THREE.LineBasicMaterial({
      color: primaryColor,
      transparent: true,
      opacity: 0.2,
    })
    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(linesMesh)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)
    const pointLight1 = new THREE.PointLight(primaryColor, 50, 100)
    pointLight1.position.set(0, 10, 15)
    scene.add(pointLight1)
    const pointLight2 = new THREE.PointLight(glowColor, 50, 100)
    pointLight2.position.set(0, -10, 15)
    scene.add(pointLight2)

    // --- Mouse Interaction ---
    const mouse = new THREE.Vector2(0, 0)
    const targetMouse = new THREE.Vector2(0, 0)
    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      targetMouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      targetMouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    }
    container.addEventListener('mousemove', onMouseMove)

    // Pause animation when not in viewport
    let isVisible = true
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting },
      { threshold: 0.1 }
    )
    observer.observe(container)

    // --- Animation Loop — capped at 30fps ---
    const clock = new THREE.Clock()
    let animationFrameId: number
    let lastFrameTime = 0
    const FRAME_MS = 1000 / 30

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      if (!isVisible) return
      const now = performance.now()
      if (now - lastFrameTime < FRAME_MS) return
      lastFrameTime = now
      const elapsedTime = clock.getElapsedTime()

      mouse.x += (targetMouse.x - mouse.x) * 0.05
      mouse.y += (targetMouse.y - mouse.y) * 0.05

      particleMaterial.uniforms.time.value = elapsedTime

      nodesGroup.children.forEach((node, i) => {
        const velocity = nodeVelocities[i]
        const originalPos = nodeOriginalPositions[i]

        const attraction = originalPos.clone().sub(node.position).multiplyScalar(0.0002)
        velocity.add(attraction)

        const mouseWorldPos = new THREE.Vector3(mouse.x * 15, mouse.y * 15, camera.position.z - 10)
        const distToMouse = node.position.distanceTo(mouseWorldPos)
        if (distToMouse < 4) {
          const repelForce = node.position.clone().sub(mouseWorldPos).normalize().multiplyScalar(0.008)
          velocity.add(repelForce)
        }

        velocity.multiplyScalar(0.97) // Damping
        node.position.add(velocity)

        // Add pulsing effect for emissive intensity
        if (node instanceof THREE.Mesh && node.material instanceof THREE.MeshStandardMaterial) {
          const pulseFactor = (Math.sin(elapsedTime * 2.5 + i * 0.3) + 1) / 2; // 0 to 1
          node.material.emissiveIntensity = 0.2 + pulseFactor * 0.6 // Varies from 0.2 to 0.8

          // Add color change on hover
          const hoverColor = new THREE.Color('#3B82F6') // A cool blue
          const originalColor = nodeOriginalColors[i]
          const targetColor = new THREE.Color()

          if (distToMouse < 4) {
            const proximity = 1 - Math.pow(distToMouse / 4, 2) // Use pow for a nicer falloff
            targetColor.lerpColors(originalColor, hoverColor, proximity)
          } else {
            targetColor.copy(originalColor)
          }
          node.material.color.lerp(targetColor, 0.1) // Smoothly transition color
        }
      })

      let lineIndex = 0
      const nodePosArray = nodesGroup.children.map(c => c.position)
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dist = nodePosArray[i].distanceTo(nodePosArray[j])
          if (dist < 5 && lineIndex < maxLines) {
            linePositions[lineIndex * 6 + 0] = nodePosArray[i].x
            linePositions[lineIndex * 6 + 1] = nodePosArray[i].y
            linePositions[lineIndex * 6 + 2] = nodePosArray[i].z
            linePositions[lineIndex * 6 + 3] = nodePosArray[j].x
            linePositions[lineIndex * 6 + 4] = nodePosArray[j].y
            linePositions[lineIndex * 6 + 5] = nodePosArray[j].z
            lineIndex++
          }
        }
      }
      lineGeometry.setDrawRange(0, lineIndex * 2)
      lineGeometry.attributes.position.needsUpdate = true

      camera.position.x += (mouse.x * 3 - camera.position.x) * 0.03
      camera.position.y += (-mouse.y * 3 - camera.position.y) * 0.03
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    // --- Resize handler ---
    const handleResize = () => {
      if (!container) return
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight

      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }
    window.addEventListener('resize', handleResize)

    // --- Cleanup ---
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', handleResize)
      container.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animationFrameId)

      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }

      renderer.dispose()
      particleGeometry.dispose()
      particleMaterial.dispose()
      nodeGeometry.dispose()
      nodesGroup.children.forEach(child => {
        if (child instanceof THREE.Mesh) {
          child.material.dispose()
        }
      })
      lineGeometry.dispose()
      lineMaterial.dispose()
    }
  }, [themeColors])

  return <div ref={containerRef} className={`w-full h-full ${className}`} />
}

export default AIVisualization
