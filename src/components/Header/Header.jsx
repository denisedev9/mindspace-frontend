import { Link, NavLink } from 'react-router-dom'
import Navigation from '../Navigation/Navigation.jsx'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">Psic. Denise Hanono</Link>
      <Navigation />
    </header>
  )
}

export default Header