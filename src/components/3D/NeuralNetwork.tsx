import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function NeuralNetwork() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const isMobile = window.innerWidth < 768 || navigator.maxTouchPoints > 0
    let cleanupFn: (() => void) | undefined

    // Defer initialization so the page becomes interactive before Three.js runs
    const initTimer = setTimeout(() => {
      if (!containerRef.current) return

    const scene = new THREE.Scene()
    // Transparent background so the CSS gradients show through
    scene.background = null

    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 18
    camera.position.y = 0
    camera.position.x = 4 // Offset slightly to the right to balance the Hero text

    const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2))
    containerRef.current.appendChild(renderer.domElement)

    // Reduced counts for performance (desktop: 800/40, mobile: 600/30)
    const particleCount = isMobile ? 600 : 800;
    const nodeCount = isMobile ? 30 : 40;

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesPositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleSizes = new Float32Array(particleCount);

    const nodesGeometry = new THREE.BufferGeometry();
    const nodesPositions = new Float32Array(nodeCount * 3);
    const nodeVelocities: THREE.Vector3[] = [];
    const nodeOriginalPositions: THREE.Vector3[] = [];

    const color1 = new THREE.Color('#D97706'); // Amber
    const color2 = new THREE.Color('#F59E0B'); // Lighter Amber
    const color3 = new THREE.Color('#3B82F6'); // Accent Blue for contrast

    for (let i = 0; i < particleCount; i++) {
      // Create a swirling galaxy / toroidal shape
      const radius = 6 + (Math.random() * 8 - 4);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1) * 0.8; // Flattened slightly
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particlesPositions[i * 3] = x;
      particlesPositions[i * 3 + 1] = y;
      particlesPositions[i * 3 + 2] = z;

      const mixedColor = color1.clone().lerp(color2, Math.random());
      if (Math.random() > 0.85) mixedColor.lerp(color3, 0.8); // Sprinkle of blue for futuristic feel

      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;

      particleSizes[i] = Math.random() * 3 + 1;
    }

    for (let i = 0; i < nodeCount; i++) {
      const radius = 8 + (Math.random() * 6 - 3);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      const pos = new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );

      nodesPositions[i * 3] = pos.x;
      nodesPositions[i * 3 + 1] = pos.y;
      nodesPositions[i * 3 + 2] = pos.z;

      nodeOriginalPositions.push(pos.clone());
      nodeVelocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.04,
        (Math.random() - 0.5) * 0.04,
        (Math.random() - 0.5) * 0.04
      ));
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1));
    nodesGeometry.setAttribute('position', new THREE.BufferAttribute(nodesPositions, 3));

    // Custom shader material for particles for a glowing, pulsing look
    const particlesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pixelRatio: { value: renderer.getPixelRatio() }
      },
      vertexShader: `
        uniform float time;
        uniform float pixelRatio;
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          
          // Organic drifting/breathing motion
          pos.x += sin(time * 0.5 + pos.y * 0.5) * 0.6;
          pos.y += cos(time * 0.3 + pos.z * 0.5) * 0.6;
          pos.z += sin(time * 0.4 + pos.x * 0.5) * 0.6;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * pixelRatio * (25.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          // Circular particle with soft glowing edge
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float alpha = smoothstep(0.5, 0.1, dist);
          
          gl_FragColor = vec4(vColor, alpha * 0.7);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const particlesSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesSystem);

    const nodesMaterial = new THREE.PointsMaterial({
      color: 0xF59E0B,
      size: 0.2,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    
    const nodesSystem = new THREE.Points(nodesGeometry, nodesMaterial);
    scene.add(nodesSystem);

    // Connecting Lines
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0xD97706,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    
    // We will update lines dynamically
    const maxLines = nodeCount * 4;
    const linesPositions = new Float32Array(maxLines * 6);
    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linesPositions, 3));
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    // Mouse Interaction
    const mouse = new THREE.Vector2(0, 0);
    const targetMouse = new THREE.Vector2(0, 0);
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
      targetMouse.x = (event.clientX - windowHalfX) * 0.0015;
      targetMouse.y = (event.clientY - windowHalfY) * 0.0015;
    };
    
    window.addEventListener('mousemove', onDocumentMouseMove);

    // Scroll Interaction
    let targetScrollY = 0;
    let currentScrollY = 0;

    const onScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('scroll', onScroll);

    // Dynamic Orbs (Background Glows)
    const addGlowOrb = (color: number, size: number, position: THREE.Vector3) => {
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.08,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.copy(position);
      scene.add(sphere);
      return sphere;
    };

    const orb1 = addGlowOrb(0xD97706, 8, new THREE.Vector3(5, 2, -5));
    const orb2 = addGlowOrb(0x3B82F6, 10, new THREE.Vector3(-6, -4, -8));
    const orb3 = addGlowOrb(0xF59E0B, 6, new THREE.Vector3(0, 6, -10));

    // Pause animation when not in viewport
    let isVisible = true
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting },
      { threshold: 0.1 }
    )
    observer.observe(containerRef.current)

    // Animation Loop — capped at 30fps to reduce main-thread work
    const clock = new THREE.Clock();
    let animationFrameId: number;
    let lastFrameTime = 0;
    const FRAME_MS = 1000 / 30;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      if (!isVisible) return
      const now = performance.now()
      if (now - lastFrameTime < FRAME_MS) return
      lastFrameTime = now
      const time = clock.getElapsedTime();
      
      // Smoothly follow mouse and scroll
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;
      currentScrollY += (targetScrollY - currentScrollY) * 0.05;

      // Update shader time
      particlesMaterial.uniforms.time.value = time;

      // Dynamic Camera Zoom & Position based on Scroll
      // As user scrolls down, camera moves back and slightly up
      camera.position.z = 18 + currentScrollY * 0.01;
      camera.position.y = -(currentScrollY * 0.005);

      // Parallax effect on the whole scene
      scene.position.x += (mouse.x * 2 - scene.position.x) * 0.05;
      scene.position.y += (-mouse.y * 2 - scene.position.y) * 0.05;

      // Rotate scene slightly over time for continuous motion + scroll based rotation
      // When scrolling, the scene spins to give a feeling of diving through data
      scene.rotation.x = currentScrollY * 0.0005;
      scene.rotation.y = time * 0.05 + currentScrollY * 0.001;
      scene.rotation.z = Math.sin(time * 0.1) * 0.05 - currentScrollY * 0.0002;

      // Animate Orbs breathing
      orb1.scale.setScalar(1 + Math.sin(time * 1.2) * 0.1 + currentScrollY * 0.0005);
      orb2.scale.setScalar(1 + Math.cos(time * 0.8) * 0.15 + currentScrollY * 0.0005);
      orb3.scale.setScalar(1 + Math.sin(time * 1.5 + 2) * 0.1 + currentScrollY * 0.0005);

      // Update nodes positions and connections
      const positions = nodesGeometry.attributes.position.array as Float32Array;
      let lineIndex = 0;

      for (let i = 0; i < nodeCount; i++) {
        const i3 = i * 3;
        
        // Add velocity
        positions[i3] += nodeVelocities[i].x;
        positions[i3 + 1] += nodeVelocities[i].y;
        positions[i3 + 2] += nodeVelocities[i].z;

        // Wander logic (pull back to original position slowly)
        // Add a dispersion effect based on scroll
        const dispersion = 1 + (currentScrollY * 0.001);

        const dx = (nodeOriginalPositions[i].x * dispersion) - positions[i3];
        const dy = (nodeOriginalPositions[i].y * dispersion) - positions[i3 + 1];
        const dz = (nodeOriginalPositions[i].z * dispersion) - positions[i3 + 2];
        
        nodeVelocities[i].x += dx * 0.00005;
        nodeVelocities[i].y += dy * 0.00005;
        nodeVelocities[i].z += dz * 0.00005;
        
        // Add noise to velocity
        nodeVelocities[i].x += (Math.random() - 0.5) * 0.002;
        nodeVelocities[i].y += (Math.random() - 0.5) * 0.002;
        nodeVelocities[i].z += (Math.random() - 0.5) * 0.002;
        
        // Damping
        nodeVelocities[i].multiplyScalar(0.98);

        // Repel from mouse slightly (mouse mapped to 3D space roughly)
        // Convert mouse screen to world position at z=0 plane
        const vec = new THREE.Vector3(targetMouse.x * 10, -targetMouse.y * 10, 0);
        const nodePos = new THREE.Vector3(positions[i3], positions[i3+1], positions[i3+2]);
        // Un-rotate the scene to get local mouse pos
        vec.applyEuler(new THREE.Euler(-scene.rotation.x, -scene.rotation.y, -scene.rotation.z));
        
        const distToMouse = nodePos.distanceTo(vec);
        if (distToMouse < 4) {
          const repelForce = (4 - distToMouse) * 0.005;
          const repelDir = nodePos.clone().sub(vec).normalize();
          nodeVelocities[i].add(repelDir.multiplyScalar(repelForce));
        }

        // Calculate connections (lines)
        for (let j = i + 1; j < nodeCount; j++) {
          const j3 = j * 3;
          const distSq = 
            Math.pow(positions[i3] - positions[j3], 2) +
            Math.pow(positions[i3 + 1] - positions[j3 + 1], 2) +
            Math.pow(positions[i3 + 2] - positions[j3 + 2], 2);
            
          // If we scroll down, connections stretch further
          const threshold = 15 + currentScrollY * 0.02;
            
          if (distSq < threshold && lineIndex < maxLines) {
            linesPositions[lineIndex * 6] = positions[i3];
            linesPositions[lineIndex * 6 + 1] = positions[i3 + 1];
            linesPositions[lineIndex * 6 + 2] = positions[i3 + 2];
            linesPositions[lineIndex * 6 + 3] = positions[j3];
            linesPositions[lineIndex * 6 + 4] = positions[j3 + 1];
            linesPositions[lineIndex * 6 + 5] = positions[j3 + 2];
            lineIndex++;
          }
        }
      }
      
      // Zero out remaining line positions to avoid artifact rendering
      for (let i = lineIndex * 6; i < maxLines * 6; i++) {
        linesPositions[i] = 0;
      }

      nodesGeometry.attributes.position.needsUpdate = true;
      linesGeometry.attributes.position.needsUpdate = true;
      linesGeometry.setDrawRange(0, lineIndex * 2);

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      particlesMaterial.uniforms.pixelRatio.value = renderer.getPixelRatio();
    };
    
    window.addEventListener('resize', handleResize);

    cleanupFn = () => {
      observer.disconnect();
      window.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      containerRef.current?.removeChild(renderer.domElement);

      // Thorough cleanup
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      nodesGeometry.dispose();
      nodesMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      orb1.geometry.dispose();
      (orb1.material as THREE.Material).dispose();
      orb2.geometry.dispose();
      (orb2.material as THREE.Material).dispose();
      orb3.geometry.dispose();
      (orb3.material as THREE.Material).dispose();
      renderer.dispose();
    };
    }, 1500) // Defer init so page becomes interactive first

    return () => {
      clearTimeout(initTimer)
      cleanupFn?.()
    };
  }, []);

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
        pointerEvents: 'none', // Critical: allow clicking through to Hero content
      }}
    />
  );
}
