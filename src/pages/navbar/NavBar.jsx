import React from 'react';
import logo from '../../assets/codelary4.png';
import './NavBar.css';
import {CloudSnow} from "phosphor-react";

function NavBar() {
  return (
    <div className='nav-heading'>
        <div className='codelary'>
        <img src={logo} alt="codelary-logo" className='codelary-logo' />
        <p>odelary</p>
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
            <div className='play-sound'>
            <CloudSnow size={25} weight="light" color='#e33fa1'/>
            </div>
            <div className='sound-text'>
                <p>Sound</p>
            </div>
            <div className='on-off'>
                <p>OFF</p>
            </div>
        </div>
    </div>
  )
}

export default NavBar;