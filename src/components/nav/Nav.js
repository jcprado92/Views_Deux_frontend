
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import './Nav.scss'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navigation">
      <Link to='/'><img src={logo} className="logo" height='60px' alt='logo' /></Link>
      <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <Link to='/'><li>Home</li></Link>
        <Link to='/views'><li>Views</li></Link>
        <Link to='/views/new'><li>New</li></Link>
      </ul>
    </nav>
  );
};

export default Nav;

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

