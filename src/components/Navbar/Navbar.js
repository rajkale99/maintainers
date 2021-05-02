import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            LegionOS
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to={{pathname:"https://legionos.org"}} target="_blank" className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
              </li>
              <li className='nav-item'>
              <Link to={{pathname:"https://blog.legionos.org"}} target="_blank" className='nav-links' onClick={closeMobileMenu}>
                Blog
              </Link>
              </li>
              <li className='nav-item'>
              <Link to={{pathname:"https://legionos.org/download"}} target="_blank" className='nav-links' onClick={closeMobileMenu}>
                Downloads
              </Link>
              </li>
              <li className='nav-item'>
              <Link to={{pathname:"https://legionos.org/stats"}} target="_blank" className='nav-links' onClick={closeMobileMenu}>
                Stats
              </Link>
            </li>
          </ul>
          {button}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
