import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets.js";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo} alt="" />
          <p className="text">
            Brrrgrrr is a burger house founded in 2025 with one simple mission –
            to serve handcrafted burgers that are always fresh and full of
            flavor. Every patty is made to order, using quality ingredients and
            soft buns baked fresh. Whether you are a meat lover or prefer
            vegetarian choices, we believe in offering something for everyone.We
            are passionate about food that feels honest, simple, and satisfying,
            delivered with care every time.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-right">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-center">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@brrrgrrr.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 © Brrrgrrr.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
