export default function Header() {
  return (
    <header className="header">
      <div className="header__photo-wrap">
        <img src="/sabbamediakit/sabba-headshot.png" alt="Sabba Nazhand" />
      </div>

      <div className="header__center">
        <h1 className="header__name">Sabba Nazhand</h1>
        <p className="header__subtitle">
          Founder &amp; CEO, Safar — The First Operating System for Human
          Transformation
        </p>
      </div>

      <div className="header__right">
        <div className="header__label">Media Kit</div>
        <ul className="header__links">
          <li>
            <a href="https://joinsafar.com" target="_blank" rel="noopener noreferrer">
              joinsafar.com
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/sabbanazhand"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/sabbanazhand
            </a>
          </li>
          <li>
            <a href="mailto:pr@joinsafar.com">pr@joinsafar.com</a>
          </li>
        </ul>
      </div>
    </header>
  )
}
