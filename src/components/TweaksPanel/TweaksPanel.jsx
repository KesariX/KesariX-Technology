import { useState, useEffect, useCallback } from 'react'
import { useShader } from '../../context/ShaderContext'
import './TweaksPanel.css'

const PALETTES = {
  saffron: { a: '#ff5a1f', b: '#1f3a8a', c: '#06091a', d: '#efe8d8', label: 'Saffron' },
  ember:   { a: '#ff7a35', b: '#5b1c0f', c: '#0a0405', d: '#f6f1e3', label: 'Ember'   },
  ocean:   { a: '#ff5a1f', b: '#0b6efd', c: '#020817', d: '#e9f0ff', label: 'Ocean'   },
  arctic:  { a: '#ff5a1f', b: '#4d6f9c', c: '#101824', d: '#efe8d8', label: 'Arctic'  },
}

export default function TweaksPanel() {
  const shaderRef = useShader()
  const [isOpen, setIsOpen] = useState(false)
  const [palette, setPalette] = useState('saffron')
  const [intensity, setIntensity] = useState(1.0)
  const [hueShift, setHueShift] = useState(0.0)

  const applyAll = useCallback(() => {
    if (!shaderRef?.current) return
    shaderRef.current.setIntensity(intensity)
    shaderRef.current.setHueShift(hueShift)
    shaderRef.current.setPalette(PALETTES[palette] || PALETTES.saffron)
  }, [shaderRef, palette, intensity, hueShift])

  useEffect(() => { applyAll() }, [applyAll])

  useEffect(() => {
    const onMessage = (e) => {
      const d = e.data || {}
      if (d.type === '__activate_edit_mode') setIsOpen(true)
      else if (d.type === '__deactivate_edit_mode') setIsOpen(false)
    }
    window.addEventListener('message', onMessage)
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*') } catch (_) {}
    return () => window.removeEventListener('message', onMessage)
  }, [])

  if (!isOpen) return null

  return (
    <div className="tweaks is-open">
      <div className="tweaks__title">
        <span>Tweaks</span>
        <button
          className="tweaks__close"
          aria-label="Close"
          onClick={() => {
            setIsOpen(false)
            try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*') } catch (_) {}
          }}
        >×</button>
      </div>

      <div className="tweaks__row">
        <label>Palette</label>
        <div className="tweaks__swatches">
          {Object.entries(PALETTES).map(([key, p]) => (
            <div
              key={key}
              className={`tweaks__swatch${palette === key ? ' is-active' : ''}`}
              title={p.label}
              style={{ '--swatch': `linear-gradient(135deg, ${p.a} 0% 33%, ${p.b} 33% 66%, ${p.c} 66% 100%)` }}
              onClick={() => setPalette(key)}
            />
          ))}
        </div>
      </div>

      <div className="tweaks__row">
        <label>Shader intensity <b>{intensity.toFixed(2)}</b></label>
        <input
          type="range" min="0" max="2" step="0.05"
          value={intensity}
          onChange={(e) => setIntensity(parseFloat(e.target.value))}
        />
      </div>

      <div className="tweaks__row">
        <label>Channel shift <b>{hueShift.toFixed(2)}</b></label>
        <input
          type="range" min="0" max="1" step="0.05"
          value={hueShift}
          onChange={(e) => setHueShift(parseFloat(e.target.value))}
        />
      </div>
    </div>
  )
}
