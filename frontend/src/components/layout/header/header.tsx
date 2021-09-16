import { Link } from 'react-router-dom'
import { ProfileAccess } from '../../profile-access/profile-access'
import './header.sass'

export const Header = () => (
  <header className="header">
    <div className="container header__content">
      <Link to="/" className="header__brand">
        Freelance
      </Link>
      <ProfileAccess />
    </div>
  </header>
)
