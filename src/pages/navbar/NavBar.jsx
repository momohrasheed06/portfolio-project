import React from 'react';
import logo from '../../assets/codelary4.png';
import './NavBar.css';

function NavBar() {
  return (
    <div className='nav-heading'>
        <div className='codelary'>
        <img src={logo} alt="codelary-logo" className='codelary-logo' />
        <p>ODELARY</p>
        </div>
        <nav className='nav-bar'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Skills</li>
                <li>Teams</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div className='sound'>
            <button>Sound</button>
        </div>
    </div>
  )
}

export default NavBar;