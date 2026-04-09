import { footerTags } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__tags">
        {footerTags.map((tag) => (
          <span key={tag} className="footer__tag">
            {tag}
          </span>
        ))}
      </div>
      <p className="footer__contact">
        Booking &amp; media:{' '}
        <a href="mailto:pr@joinsafar.com">pr@joinsafar.com</a>
      </p>
      <div className="footer__links">
        <a href="https://joinsafar.com" target="_blank" rel="noopener noreferrer">
          joinsafar.com
        </a>
        <a
          href="https://linkedin.com/in/sabbanazhand"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://instagram.com/sabba_nazhand"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </footer>
  )
}
