import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="footer-container ">
        <div className="footer-about">
          <h3>About Our Hotel</h3>
          <p>
            Experience luxury and comfort at our hotel. We offer world-class
            amenities, exceptional service, and a memorable stay for every
            guest.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li> Address: 01, Kala Rohi, Rani Rd, Udaipur, Rajasthan 313001</li>
            <li> Phone: +123 456 7890</li>
            <li> Email: info@aurikahotel.com</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/rooms">Rooms</a>
            </li>
            <li>
              <a href="/reservation-form">Reservations</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Our Hotel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
