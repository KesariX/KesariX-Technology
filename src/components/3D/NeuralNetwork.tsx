import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface Node {
  position: THREE.Vector3
  velocity: THREE.Vector3
  targetPosition: THREE.Vector3
  pulsePhase: number
  connections: number[]
}

interface Particle {
  position: THREE.Vector3
  velocity: THREE.Vector3
  life: number
  maxLife: number
  size: number
}

interface DataFlow {
  startNode: number
  endNode: number
  progress: number
  speed: number
}

export default function NeuralNetwork() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const nodesRef = useRef<Node[]>([])
  const linesRef = useRef<THREE.LineSegments | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const particleGeometryRef = useRef<THREE.BufferGeometry | null>(null)
  const particlePointsRef = useRef<THREE.Points | null>(null)
  const dataFlowsRef = useRef<DataFlow[]>([])
  const dataFlowPointsRef = useRef<THREE.Points | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xfaf9f7)
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 3
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create neural network nodes
    const nodeCount = 24
    const nodes: Node[] = []
    
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2
      const radius = 1.2
      const y = (Math.random() - 0.5) * 0.8
      
      nodes.push({
        position: new THREE.Vector3(
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius
        ),
        velocity: new THREE.Vector3(),
        targetPosition: new THREE.Vector3(
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius
        ),
        pulsePhase: Math.random() * Math.PI * 2,
        connections: []
      })
    }

    // Create connections between nearby nodes
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position)
        if (dist < 1.8) {
          nodes[i].connections.push(j)
        }
      }
    }

    nodesRef.current = nodes

    // Create node geometries
    const nodeGeometry = new THREE.BufferGeometry()
    const nodePositions = new Float32Array(nodeCount * 3)
    nodes.forEach((node, idx) => {
      nodePositions[idx * 3] = node.position.x
      nodePositions[idx * 3 + 1] = node.position.y
      nodePositions[idx * 3 + 2] = node.position.z
    })
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3))

    const nodeMaterial = new THREE.PointsMaterial({
      color: 0xF59E0B,
      size: 0.08,
      sizeAttenuation: true,
    })

    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial)
    scene.add(nodePoints)

    // Create connection lines
    const lineCount = nodes.reduce((sum, node) => sum + node.connections.length, 0)
    const lineGeometry = new THREE.BufferGeometry()
    const linePositions = new Float32Array(lineCount * 6)
    let lineIndex = 0

    nodes.forEach((node) => {
      node.connections.forEach((j) => {
        linePositions[lineIndex * 6] = node.position.x
        linePositions[lineIndex * 6 + 1] = node.position.y
        linePositions[lineIndex * 6 + 2] = node.position.z
        linePositions[lineIndex * 6 + 3] = nodes[j].position.x
        linePositions[lineIndex * 6 + 4] = nodes[j].position.y
        linePositions[lineIndex * 6 + 5] = nodes[j].position.z
        lineIndex++
      })
    })

    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xD97706,
      transparent: true,
      opacity: 0.4,
      linewidth: 1,
    })

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lineSegments)
    linesRef.current = lineSegments

    // Initialize particle system for ambient effects
    const maxParticles = 200
    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(maxParticles * 3)
    const particleSizes = new Float32Array(maxParticles)
    
    for (let i = 0; i < maxParticles; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 4
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 4
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 4
      particleSizes[i] = Math.random() * 0.04
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1))

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xFBBF24,
      size: 0.03,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.4,
    })

    const particlePoints = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particlePoints)
    particlePointsRef.current = particlePoints
    particleGeometryRef.current = particleGeometry

    // Initialize particles array
    for (let i = 0; i < maxParticles; i++) {
      particlesRef.current.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        life: Math.random(),
        maxLife: 2 + Math.random() * 2,
        size: Math.random() * 0.04,
      })
    }

    // Initialize data flows
    for (let i = 0; i < Math.min(nodeCount, 8); i++) {
      const nodeIdx = Math.floor(Math.random() * nodeCount)
      const node = nodes[nodeIdx]
      if (node.connections.length > 0) {
        const targetIdx = node.connections[Math.floor(Math.random() * node.connections.length)]
        dataFlowsRef.current.push({
          startNode: nodeIdx,
          endNode: targetIdx,
          progress: Math.random(),
          speed: 0.005 + Math.random() * 0.005,
        })
      }
    }

    // Create data flow visualization
    const dataFlowGeometry = new THREE.BufferGeometry()
    const dataFlowPositions = new Float32Array(dataFlowsRef.current.length * 3)
    dataFlowGeometry.setAttribute('position', new THREE.BufferAttribute(dataFlowPositions, 3))

    const dataFlowMaterial = new THREE.PointsMaterial({
      color: 0xD97706,
      size: 0.06,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    })

    const dataFlowPoints = new THREE.Points(dataFlowGeometry, dataFlowMaterial)
    scene.add(dataFlowPoints)
    dataFlowPointsRef.current = dataFlowPoints

    // Create glowing orbs
    const orbGeometry = new THREE.IcosahedronGeometry(5, 4)
    
    const createOrbMaterial = (hueOffset: number = 0) => new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        hueOffset: { value: hueOffset },
      },
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vPosition;
        uniform float time;
        uniform float hueOffset;
        void main() {
          float dist = length(vPosition);
          float pulse = sin(time * 0.5 + dist + hueOffset) * 0.5 + 0.5;
          vec3 color = mix(vec3(0.85, 0.62, 0.04), vec3(0.95, 0.77, 0.06), pulse);
          float wave = sin(time * 0.3 + dist) * 0.3 + 0.7;
          gl_FragColor = vec4(color, 0.15 * wave);
        }
      `,
      transparent: true,
      wireframe: false,
    })

    const orbMaterial1 = createOrbMaterial(0)
    const orbMaterial2 = createOrbMaterial(Math.PI / 3)
    const orbMaterial3 = createOrbMaterial(Math.PI * 2 / 3)

    const orb1 = new THREE.Mesh(orbGeometry, orbMaterial1)
    orb1.position.set(8, 0, -10)
    orb1.scale.set(0.5, 0.5, 0.5)
    scene.add(orb1)

    const orb2 = new THREE.Mesh(orbGeometry, orbMaterial2)
    orb2.position.set(-7, 0, -8)
    orb2.scale.set(0.6, 0.6, 0.6)
    scene.add(orb2)

    const orb3 = new THREE.Mesh(orbGeometry, orbMaterial3)
    orb3.position.set(0, 8, -12)
    orb3.scale.set(0.4, 0.4, 0.4)
    scene.add(orb3)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    let frameCount = 0
    const animate = () => {
      frameCount++
      animationRef.current = requestAnimationFrame(animate)

      // Update nodes
      const positions = nodeGeometry.attributes.position.array as Float32Array
      const linePositions = lineGeometry.attributes.position.array as Float32Array

      nodes.forEach((node, i) => {
        node.pulsePhase += 0.02

        // Mouse repulsion
        const mouseWorldPos = new THREE.Vector3(mouseRef.current.x * 2, mouseRef.current.y * 2, 0)
        const direction = new THREE.Vector3().subVectors(node.position, mouseWorldPos)
        const distance = direction.length()
        
        if (distance < 2) {
          const force = (2 - distance) * 0.3
          const normalized = direction.normalize()
          node.velocity.add(normalized.multiplyScalar(force))
          
          // Emit particles from excited nodes
          if (Math.random() > 0.7) {
            const particle = particlesRef.current.find(p => p.life >= p.maxLife)
            if (particle) {
              particle.position.copy(node.position)
              particle.velocity.set(
                (Math.random() - 0.5) * 0.05,
                (Math.random() - 0.5) * 0.05,
                (Math.random() - 0.5) * 0.05
              )
              particle.life = 0
              particle.maxLife = 1.5 + Math.random()
              particle.size = 0.04 + Math.random() * 0.03
            }
          }
        }

        // Slow velocity damping
        node.velocity.multiplyScalar(0.92)

        // Update position
        node.position.add(node.velocity)

        // Soft convergence to target
        const diff = new THREE.Vector3().subVectors(node.targetPosition, node.position)
        node.position.add(diff.multiplyScalar(0.02))

        // Keep within bounds
        const distFromOrigin = node.position.length()
        if (distFromOrigin > 2) {
          node.position.normalize().multiplyScalar(2)
        }

        // Update geometry positions
        positions[i * 3] = node.position.x
        positions[i * 3 + 1] = node.position.y
        positions[i * 3 + 2] = node.position.z
      })

      nodeGeometry.attributes.position.needsUpdate = true

      // Update line positions
      let lineIdx = 0
      nodes.forEach((node) => {
        node.connections.forEach((j) => {
          linePositions[lineIdx * 6] = node.position.x
          linePositions[lineIdx * 6 + 1] = node.position.y
          linePositions[lineIdx * 6 + 2] = node.position.z
          linePositions[lineIdx * 6 + 3] = nodes[j].position.x
          linePositions[lineIdx * 6 + 4] = nodes[j].position.y
          linePositions[lineIdx * 6 + 5] = nodes[j].position.z
          lineIdx++
        })
      })

      lineGeometry.attributes.position.needsUpdate = true

      // Update particles
      if (particleGeometryRef.current && particlePointsRef.current) {
        const pPositions = particleGeometryRef.current.attributes.position.array as Float32Array
        const pSizes = particleGeometryRef.current.attributes.size.array as Float32Array
        
        particlesRef.current.forEach((particle, idx) => {
          particle.life += 0.016
          
          // Gravity effect
          particle.velocity.y -= 0.0001
          particle.velocity.multiplyScalar(0.98)
          particle.position.add(particle.velocity)
          
          pPositions[idx * 3] = particle.position.x
          pPositions[idx * 3 + 1] = particle.position.y
          pPositions[idx * 3 + 2] = particle.position.z
          
          const lifeRatio = particle.life / particle.maxLife
          pSizes[idx] = particle.size * (1 - lifeRatio * lifeRatio)
        })
        
        particleGeometryRef.current.attributes.position.needsUpdate = true
        particleGeometryRef.current.attributes.size.needsUpdate = true
      }

      // Update data flows
      if (dataFlowPointsRef.current) {
        const dfPositions = dataFlowPointsRef.current.geometry.attributes.position.array as Float32Array
        
        dataFlowsRef.current.forEach((flow, idx) => {
          flow.progress += flow.speed
          
          if (flow.progress > 1) {
            flow.progress = 0
            // Randomly pick new flow or restart
            const node = nodes[flow.startNode]
            if (node.connections.length > 0 && Math.random() > 0.3) {
              flow.endNode = node.connections[Math.floor(Math.random() * node.connections.length)]
            }
          }
          
          const startPos = nodes[flow.startNode].position
          const endPos = nodes[flow.endNode].position
          
          const flowPos = new THREE.Vector3().lerpVectors(startPos, endPos, flow.progress)
          
          dfPositions[idx * 3] = flowPos.x
          dfPositions[idx * 3 + 1] = flowPos.y
          dfPositions[idx * 3 + 2] = flowPos.z
        })
        
        dataFlowPointsRef.current.geometry.attributes.position.needsUpdate = true
      }

      // Rotate scene gently
      scene.rotation.x += 0.0002
      scene.rotation.y += 0.0005

      // Update shader time for all orbs
      const allMeshes = scene.children.filter(child => child instanceof THREE.Mesh)
      allMeshes.forEach((mesh) => {
        if (mesh.material instanceof THREE.ShaderMaterial) {
          mesh.material.uniforms.time.value += 0.016
        }
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !renderer) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      containerRef.current?.removeChild(renderer.domElement)
      
      // Cleanup geometries and materials
      nodeGeometry.dispose()
      lineGeometry.dispose()
      if (particleGeometryRef.current) particleGeometryRef.current.dispose()
      dataFlowGeometry.dispose()
      orbGeometry.dispose()
      
      nodeMaterial.dispose()
      lineMaterial.dispose()
      particleMaterial.dispose()
      dataFlowMaterial.dispose()
      orbMaterial1.dispose()
      orbMaterial2.dispose()
      orbMaterial3.dispose()
      
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
      }}
    />
  )
}
