import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Star, Quote } from 'lucide-react'
import './styles/Testimonials.css'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      text: "KesariX didn't just build our product — they completely changed how we think about technology. Their architectural decisions saved us months of rework and scaled flawlessly from day one.",
      author: 'Sarah Mitchell',
      role: 'CTO, Versa Technologies',
      initials: 'SM',
      stars: 5,
    },
    {
      id: 2,
      text: 'The team delivered our analytics platform 2 weeks ahead of schedule. The quality was exceptional, handling 2M+ events without a single dropped packet.',
      author: 'James Rodriguez',
      role: 'CEO, StackFlow Inc.',
      initials: 'JR',
      stars: 5,
    },
    {
      id: 3,
      text: 'Automation that actually works. Our HR team saved 30 hours every single week immediately after launch. The ROI was virtually instant.',
      author: 'Tom Hargrove',
      role: 'IT Director, Orbito',
      initials: 'TH',
      stars: 5,
    },
    {
      id: 4,
      text: 'Their AI team understood our domain instantly. The symptom checker accuracy exceeded all leading medical benchmarks globally.',
      author: 'Priya Sharma',
      role: 'Product, NexHealth',
      initials: 'PS',
      stars: 5,
    },
  ]

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="kx-testimonials section-padding" id="testimonials">
      {/* Background ambient lighting */}
      <div className="kx-testimonials__bg-glow" />

      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div className="kx-testimonials__header">
          <span className="kx-testimonials__eyebrow">Client Voices</span>
          <h2 className="kx-testimonials__title">
            What Our Clients
            <br />
            Actually Say
          </h2>
        </div>

        {/* Carousel Area */}
        <div className="kx-testimonials__carousel">
          <Quote className="kx-testimonials__watermark-icon" size={120} strokeWidth={1} />

          <div className="kx-testimonials__slider-viewport">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="kx-testimonials__slide-content"
              >
                {/* Stars */}
                <div className="kx-testimonials__slider-stars">
                  {Array.from({ length: testimonials[activeIndex].stars }).map((_, i) => (
                    <Star key={i} size={20} className="kx-testimonials__star" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="kx-testimonials__slider-text">
                  "{testimonials[activeIndex].text}"
                </p>

                {/* Author Info */}
                <div className="kx-testimonials__slider-author">
                  <div className="kx-testimonials__avatar">
                    {testimonials[activeIndex].initials}
                  </div>
                  <div className="kx-testimonials__author-details">
                    <p className="kx-testimonials__name">{testimonials[activeIndex].author}</p>
                    <p className="kx-testimonials__role">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="kx-testimonials__nav">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`kx-testimonials__nav-dot ${
                  idx === activeIndex ? 'kx-testimonials__nav-dot--active' : ''
                }`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              >
                {/* Progress ring visible only on active */}
                {idx === activeIndex && (
                  <motion.svg className="kx-testimonials__progress-ring" viewBox="0 0 36 36">
                    <motion.path
                      className="kx-testimonials__progress-circle"
                      strokeDasharray="100, 100"
                      initial={{ strokeDashoffset: 100 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 6, ease: "linear" }}
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </motion.svg>
                )}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
