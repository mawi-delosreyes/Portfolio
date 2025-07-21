import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

function NavBar() {
  return (
    <nav id="navbar">
      <div>
        <ul id="navbar-content">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>ABOUT</NavLink></li>
          <li><NavLink to="/experience" className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>EXPERIENCE</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>PROJECTS</NavLink></li>
          <li><NavLink to="/education" className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>EDUCATION</NavLink></li>
          <li><NavLink to="/resume" className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>RESUME</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar
