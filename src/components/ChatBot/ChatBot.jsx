import { useState, useRef, useEffect } from 'react'
import './ChatBot.css'

const PHONE = '919274739361'
const WA_LINK = `https://wa.me/${PHONE}?text=${encodeURIComponent('Hi KesariX! I would like to discuss a project.')}`

const KNOWLEDGE = [
  {
    patterns: ['hello', 'hi', 'hey', 'howdy', 'start', 'help'],
    reply: 'Hello! I\'m <b>KAI</b> — KesariX\'s AI assistant. How can I help you today?<br><br>Ask me about our services, pricing, process, or how to get started.',
    quick: ['Our Services', 'Pricing', 'Get Started'],
  },
  {
    patterns: ['service', 'offer', 'capabilities', 'build', 'custom ai', 'rag', 'web development', 'mobile development', 'app', 'agent', 'workflow', 'automation', 'what do'],
    reply: 'We offer four specialized services:<br><br>🧠 <b>Custom AI & RAG Solutions</b> — Custom LLMs & knowledge bases<br>⚙️ <b>Web & Mobile App Development</b> — High-performance platforms<br>🤖 <b>Autonomous AI Agents</b> — Self-running digital workers<br>🔄 <b>Workflow & Process Automation</b> — Seamless tool integrations<br><br>Which area interests you?',
    quick: ['AI Agents', 'AI & RAG Solutions', 'Pricing'],
  },
  {
    patterns: ['agent', 'agents', 'autonomous', 'chatbot', 'bot'],
    reply: 'Our <b>Autonomous AI Agents</b> service deploys intelligent agents that perceive, reason, and act within your ecosystem.<br><br>We build:<br>• Customer Support Bots<br>• Sales Intelligence Agents<br>• Knowledge Base Assistants<br>• E-commerce Concierges<br>• Custom multi-agent pipelines<br><br>Want to explore a specific use case?',
    quick: ['Bot Types', 'Book a Call', 'Pricing'],
  },
  {
    patterns: ['price', 'cost', 'pricing', 'package', 'plan', 'budget', 'much'],
    reply: 'Our engagements are scoped per project. Typical starting points:<br><br>• <b>Discovery Sprint</b> — Free consultation<br>• <b>MVP Build</b> — from ₹2.5L<br>• <b>Enterprise Platform</b> — custom quote<br><br>We match the investment to your actual business goals.',
    quick: ['View Pricing', 'Book a Call'],
  },
  {
    patterns: ['process', 'how work', 'how does', 'start', 'begin', 'steps', 'timeline'],
    reply: 'Our six-step process:<br><br>1. <b>Discovery</b> — understand your goals<br>2. <b>Architecture</b> — design the system<br>3. <b>Build</b> — sprint-based development<br>4. <b>QA & Testing</b> — rigorous checks<br>5. <b>Launch</b> — zero-downtime deployment<br>6. <b>Scale</b> — ongoing optimization<br><br>We begin with a free 30-minute discovery call.',
    quick: ['Book Discovery Call', 'View Our Work'],
  },
  {
    patterns: ['contact', 'reach', 'talk', 'speak', 'call', 'email', 'touch'],
    reply: 'You can reach the KesariX team directly:<br><br>📧 <b>info@kesarixtechnology.com</b><br>📞 <b>+91 92747 39361</b><br><br>We typically respond within 4 business hours.',
    quick: ['Start a Project', 'WhatsApp Us'],
  },
  {
    patterns: ['work', 'portfolio', 'project', 'case study', 'client', 'example'],
    reply: 'We\'ve delivered AI-powered SaaS platforms and autonomous agent systems across India and globally.<br><br>Browse our case studies to see real outcomes.',
    quick: ['View Our Work', 'Get Started'],
  },
  {
    patterns: ['team', 'who', 'founder', 'people', 'about'],
    reply: 'KesariX is an Awwwards-tier AI and product studio from India. Our team combines deep ML research, full-stack engineering, and design excellence.<br><br>Learn more about who we are.',
    quick: ['About Us', 'Our Services'],
  },
  {
    patterns: ['career', 'job', 'hire', 'join', 'work with'],
    reply: 'We\'re always looking for exceptional engineers, AI researchers, and designers.<br><br>Explore open positions — we offer remote-first, high-ownership roles.',
    quick: ['View Careers', 'About KesariX'],
  },
]

const FALLBACK_REPLY = 'I didn\'t quite catch that. Here\'s how I can help:<br><br>• Services & capabilities<br>• Pricing & packages<br>• Our process & timeline<br>• Contact & next steps'
const FALLBACK_QUICK = ['Our Services', 'Pricing', 'Contact Us']

const NAV_MAP = {
  'Our Services': '/#capabilities',
  'AI Agents': '/service/autonomous-ai-agents',
  'AI & RAG Solutions': '/service/custom-ai-rag-solutions',
  'Bot Types': '/service/autonomous-ai-agents',
  'View Pricing': '/pricing',
  'Pricing': '/pricing',
  'View Our Work': '/work',
  'Our Work': '/work',
  'About Us': '/about',
  'About KesariX': '/about',
  'View Careers': '/careers',
  'Start a Project': '/contact',
  'Book a Call': '/contact',
  'Book Discovery Call': '/contact',
  'Get Started': '/contact',
  'Contact Us': '/contact',
  'WhatsApp Us': WA_LINK,
}

function getBotResponse(text) {
  const lower = text.toLowerCase()
  for (const item of KNOWLEDGE) {
    if (item.patterns.some(p => lower.includes(p))) {
      return { reply: item.reply, quick: item.quick || [] }
    }
  }
  return { reply: FALLBACK_REPLY, quick: FALLBACK_QUICK }
}

let _id = 0
const uid = () => ++_id

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: uid(),
      from: 'bot',
      text: 'Hi! I\'m <b>KAI</b>, KesariX\'s AI assistant. Ask me anything about our services, pricing, or how to get started. 🚀',
      quick: ['Our Services', 'Pricing', 'Get Started'],
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 320)
    }
  }, [isOpen])

  function addBotMessage(text, quick = []) {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, { id: uid(), from: 'bot', text, quick }])
    }, 800 + Math.random() * 500)
  }

  function handleSend(text) {
    const trimmed = (text !== undefined ? text : input).trim()
    if (!trimmed) return
    setMessages(prev => [...prev, { id: uid(), from: 'user', text: trimmed, quick: [] }])
    setInput('')
    const { reply, quick } = getBotResponse(trimmed)
    addBotMessage(reply, quick)
  }

  function handleQuick(label) {
    const url = NAV_MAP[label]
    if (url) {
      if (url.startsWith('http')) {
        window.open(url, '_blank', 'noopener,noreferrer')
      } else {
        window.location.href = url
      }
      return
    }
    handleSend(label)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* ── Chat Panel ── */}
      <div
        className={`chatbot-panel ${isOpen ? 'chatbot-panel--open' : ''}`}
        role="dialog"
        aria-label="KAI — KesariX AI Chat"
        aria-hidden={!isOpen}
      >
        <div className="chatbot-panel__header">
          <div className="chatbot-panel__header-info">
            <div className="chatbot-panel__avatar">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="8" width="16" height="12" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="9" cy="14" r="1.5" fill="currentColor"/>
                <circle cx="15" cy="14" r="1.5" fill="currentColor"/>
                <path d="M9 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 8V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="4" r="1.5" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <div className="chatbot-panel__name">KAI</div>
              <div className="chatbot-panel__status">
                <span className="chatbot-panel__status-dot" />
                KesariX AI Assistant
              </div>
            </div>
          </div>
          <button
            className="chatbot-panel__close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div
          className="chatbot-panel__messages"
          onWheel={e => e.stopPropagation()}
          onTouchMove={e => e.stopPropagation()}
        >
          {messages.map(msg => (
            <div key={msg.id} className={`chatbot-msg chatbot-msg--${msg.from}`}>
              {msg.from === 'bot' ? (
                <div
                  className="chatbot-msg__bubble chatbot-msg__bubble--bot"
                  dangerouslySetInnerHTML={{ __html: msg.text }}
                />
              ) : (
                <div className="chatbot-msg__bubble chatbot-msg__bubble--user">{msg.text}</div>
              )}
              {msg.from === 'bot' && msg.quick.length > 0 && (
                <div className="chatbot-msg__quick">
                  {msg.quick.map(q => (
                    <button key={q} className="chatbot-quick-btn" onClick={() => handleQuick(q)}>
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="chatbot-msg chatbot-msg--bot">
              <div className="chatbot-msg__bubble chatbot-msg__bubble--bot chatbot-typing">
                <span /><span /><span />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-panel__input-wrap">
          <input
            ref={inputRef}
            className="chatbot-panel__input"
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            maxLength={200}
            aria-label="Chat message"
          />
          <button
            className="chatbot-panel__send"
            onClick={() => handleSend()}
            aria-label="Send"
            disabled={!input.trim()}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ── Floating Bot Button ── */}
      <button
        className={`chatbot-btn ${isOpen ? 'chatbot-btn--active' : ''}`}
        onClick={() => setIsOpen(o => !o)}
        aria-label={isOpen ? 'Close AI chat' : 'Chat with KAI — KesariX AI Assistant'}
        title="Chat with KAI"
      >
        {isOpen ? (
          <svg className="chatbot-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <>
            <svg className="chatbot-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/>
              <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none"/>
              <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none"/>
            </svg>
            <span className="chatbot-btn__label">Ask KAI</span>
            <span className="chatbot-btn__pulse" aria-hidden="true" />
          </>
        )}
      </button>
    </>
  )
}
