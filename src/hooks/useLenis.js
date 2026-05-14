import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export function useLenis(shaderRef) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const ticker = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    lenis.on('scroll', ({ velocity, scroll, limit }) => {
      if (shaderRef?.current) {
        shaderRef.current.setVelocity(Math.max(-2, Math.min(2, velocity * 0.02)))
        if (shaderRef.current.uniforms) {
          shaderRef.current.uniforms.uScroll.value = scroll / (limit || 1)
        }
      }
    })

    return () => {
      lenis.destroy()
      gsap.ticker.remove(ticker)
    }
  }, [shaderRef])
}
