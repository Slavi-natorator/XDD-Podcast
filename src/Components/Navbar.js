import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Using NavLink from React Router for active state
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">XDDProductions</NavLink>
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={toggleNavbar}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleNavbar}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleNavbar}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;