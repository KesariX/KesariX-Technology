import './BottomMarquee.css'

const ROWS = [
  {
    items: ['ENGINEER WHAT\'S NEXT', 'SCALE TO MILLIONS', 'BUILD FASTER', 'LAUNCH YOUR MVP', 'AI-DRIVEN SOLUTIONS'],
    reverse: false,
  },
  {
    items: ['START YOUR PROJECT', 'RAPID DEVELOPMENT', 'ENTERPRISE GRADE', 'ZERO TO ONE', 'DISRUPT THE MARKET'],
    reverse: true,
  },
  {
    items: ['SEAMLESS ARCHITECTURE', 'PUSH BOUNDARIES', 'ACCELERATE GROWTH', 'CRAFTED WITH CODE', 'NEXT-GEN TECH'],
    reverse: false,
  },
]

function MarqueeRow({ items, reverse }) {
  const content = [...items, ...items, ...items].map((item, i) => (
    <span key={i}>{item} <span className="bm__dot">✦</span> </span>
  ))
  return (
    <div className={`bm__row${reverse ? ' bm__row--reverse' : ''}`}>
      <div className="bm__track">{content}</div>
    </div>
  )
}

export default function BottomMarquee() {
  return (
    <section className="bm" aria-hidden="true">
      {ROWS.map((row, i) => (
        <MarqueeRow key={i} items={row.items} reverse={row.reverse} />
      ))}
    </section>
  )
}
