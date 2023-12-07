import React from 'react'

import "../styles/Hero.scss";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className='hero'>
      <div className="container">
        <div className='hero-content'>
          <h1 className='hero-title'>
            Global PenFriends
          </h1>
          <p>Find Snail mail and internet friends from around the world.<br/>Safe, secure and family friendly.</p>
          <div className='home-login-box'>
            <Link to="/join">
              <span className='join-btn'>Join</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero