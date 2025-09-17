import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="footer-logo" src={assets.logo} alt="" />
            <p>Brrrgrrr is your ultimate burger destination, right at your fingertips. Explore a mouthwatering menu of gourmet and classic burgers, all crafted with the finest ingredients and culinary expertise. Whether you’re craving a juicy cheeseburger, a spicy chicken delight, or a plant-based masterpiece, Brrrgrrr makes it easy to order your favorites and have them delivered fresh and fast.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@brrrgrrr.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Brrrgrrr.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
