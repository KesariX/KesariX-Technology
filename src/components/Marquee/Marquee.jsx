import './Marquee.css'

const ITEMS = [
  'AI Solutions', 'Web Development', 'Automation Systems', 'Cloud Architecture',
  'AI Agents', 'IT Infrastructure', 'Mobile Apps', 'Data Engineering',
  'Digital Marketing', 'SEO', 'Social Media Marketing', 'Paid Ads',
  'Branding & Content', 'API Development',
]

function Track({ reverse }) {
  return (
    <span>
      {ITEMS.map((item, i) => (
        <span key={i}>
          {item} <span className="marquee__dot">✦</span>{' '}
        </span>
      ))}
    </span>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <Track />
        <Track />
      </div>
    </div>
  )
}
