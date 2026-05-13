import { useState, useEffect } from 'react'
import './CookieBanner.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('kesarix-cookies')
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('kesarix-cookies', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('kesarix-cookies', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-banner__inner">
        <div className="cookie-banner__text">
          <span className="cookie-banner__icon">🍪</span>
          <div>
            <p className="cookie-banner__title">We use cookies</p>
            <p className="cookie-banner__desc">
              We use cookies to enhance your experience, analyse traffic, and serve personalised content.
              By continuing, you consent to our{' '}
              <a href="/cookie-policy">Cookie Policy</a>.
            </p>
          </div>
        </div>
        <div className="cookie-banner__actions">
          <button className="cookie-banner__btn cookie-banner__btn--decline" onClick={decline}>
            Decline
          </button>
          <button className="cookie-banner__btn cookie-banner__btn--accept" onClick={accept}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
