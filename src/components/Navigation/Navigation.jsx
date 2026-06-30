import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" className={({ isActive }) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}>Inicio</NavLink>
      <NavLink to="/about" className={({ isActive }) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}>Sobre mí</NavLink>
      <NavLink to="/articles" className={({ isActive }) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}>Artículos</NavLink>
    </nav>
  )
}

export default Navigation