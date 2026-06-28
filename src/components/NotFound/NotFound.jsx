import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import './NotFound.css'
import SEO from '../SEO/SEO'


export default function NotFound() {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.nf-num', { autoAlpha: 0, scale: 0.7, y: 40 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 1.2, ease: 'expo.out' })
      gsap.fromTo('.nf-title, .nf-desc, .nf-actions', { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1, delay: 0.3 })
      gsap.to('.nf-num', {
        backgroundPosition: '200% center',
        duration: 6, repeat: -1, ease: 'none'
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div className="nf-page" ref={ref}>
      <SEO
        title="404 — Page Not Found"
        description="The page you're looking for doesn't exist. Return to the KesariX Technology homepage."
        canonicalUrl="/404"
        noIndex={true}
      />
      <div className="nf-glow" aria-hidden="true" />
      <div className="nf-inner">
        <div className="nf-num" aria-hidden="true">404</div>
        <h1 className="nf-title">Page Not Found</h1>
        <p className="nf-desc">
          The page you're looking for has moved, been deleted, or never existed.
          <br />Let's get you back on track.
        </p>
        <div className="nf-actions">
          <a href="/" className="nf-btn nf-btn--primary">← Back to Home</a>
          <a href="/contact" className="nf-btn nf-btn--ghost">Contact Us</a>
        </div>
        <div className="nf-links">
          <a href="/work">Our Work</a>
          <a href="/pricing">Pricing</a>
          <a href="/blog">Blog</a>
          <a href="/about">About</a>
        </div>
      </div>
    </div>
  )
}
