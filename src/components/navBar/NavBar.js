
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import './NavBar.scss'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navBar">
      <div className='navBar__container'>
      <Link to='/'>
        <img src={logo} className="navBar__logo" height='60px' alt='logo' />
      </Link>
      <button 
        className={`navBar__menuToggle ${menuOpen ? 'navBar__menuToggle--open' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`navBar__menuItems ${menuOpen ? 'navBar__menuItems--open' : ''}`}>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/views'>
          <li>Views</li>
        </Link>
        <Link to='/views/new'>
          <li>New</li>
        </Link>
      </ul>
      </div>
    </nav>
  );
};

export default NavBar;

// import React from 'react'
// import { Link } from 'react-router-dom'
// import '../Nav/nav.scss'
// function Nav() {
//   return (
//     <div className='nav'>
//         <Link to="/">Views</Link>
//         <Link to="/views">My Views</Link>
//         <Link to="/views/new">Add New View</Link>
//     </div>
//   )
// }

// export default Nav

