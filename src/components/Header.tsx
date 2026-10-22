
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="logo">
          <span className="logo-mark">A.</span>
          <span>Akmaral's Journal</span>
        </NavLink>

        <nav className="navigation" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/private">Private</NavLink>
        </nav>
      </div>
    </header>
  )
}
