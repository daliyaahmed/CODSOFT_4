import React from 'react'
import "./Footer.css"
import { assets } from './assets/assets'

const Footer = () => {
  return (
    <div className='footer'id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" className='logo' />
            <p>ChicChow has all the favor you want. This business was originated in the 1990s.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>ChicChow.</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>02 4446666</li>
                <li>contact@chicchow.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright 2024 © ChicChow.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
