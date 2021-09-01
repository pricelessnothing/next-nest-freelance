import { Link } from 'react-router-dom'
import './header.sass'

export const Header = () => (
  <header className="header">
    <div className="container header__content">
      <Link to="/">
        <div className="header__brand">Freelance</div>
      </Link>
    </div>
  </header>
)
