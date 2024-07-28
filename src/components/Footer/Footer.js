import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div id="footer-top" className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Flora</a></li>
              <li><a href="#">Fauna</a></li>
              <li><a href="aboutus">About Us</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="mailto:info@virtualzoo.com">info@virtualzoo.com</a></li>
              <li><a href="tel:+1234567890">+1234567890</a></li>
              <li>123 Zoo Lane, Virtual City, Zoo Country</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Social Media</h4>
            <ul>
              <li><a href="#"><FaFacebookF /></a></li>
              <li><a href="#"><FaTwitter /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaLinkedinIn /></a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div id="footer-bottom" className="container">
        <div className="footer-bottom-content">
          <div className="copyright-section">
            <p>&copy; {new Date().getFullYear()} Virtual Zoo. All Rights Reserved.</p>
          </div>
          <div className="newsletter-section">
            <h3>Subscribe to Newsletter</h3>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
