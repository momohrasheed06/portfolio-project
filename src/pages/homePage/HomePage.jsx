import React from 'react';
import myimg from '../../assets/myimg.png';
import './HomePage.css';

function HomePage() {
  return (
    <div>
        <div className='home-page'>
            <div className="home-text">
                <p>Hello, my name is</p>
                <h1><span>Momoh Abdulrasheed!</span></h1>
                <p>And I'm a <span> Software Developer</span></p>
            </div>
            <div className="home-image">
                <img src={myimg} alt="myimage" />
            </div>
        </div>
    </div>
  )
}

export default HomePage;