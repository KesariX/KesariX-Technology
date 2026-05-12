import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './TrustedBy.css'

gsap.registerPlugin(ScrollTrigger)

export default function TrustedBy() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.trusted-by__logo', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 0.5,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="trusted-by" ref={sectionRef} style={{ backgroundColor: '#050507', padding: '4rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="trusted-by__inner" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <p className="trusted-by__label" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#666', marginBottom: '2.5rem', fontWeight: 500 }}>
          Trusted by innovative teams at
        </p>
        <div className="trusted-by__logos" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem', alignItems: 'center' }}>
          {/* Replace with your actual client SVG logos */}
          <h3 className="trusted-by__logo" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', margin: 0 }}>Acme Corp</h3>
          <h3 className="trusted-by__logo" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', margin: 0 }}>GlobalTech</h3>
          <h3 className="trusted-by__logo" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', margin: 0 }}>Nebula</h3>
          <h3 className="trusted-by__logo" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', margin: 0 }}>Quantum</h3>
          <h3 className="trusted-by__logo" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', margin: 0 }}>Starlight</h3>
        </div>
      </div>
    </section>
  )
}