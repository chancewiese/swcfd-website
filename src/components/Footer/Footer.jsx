import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
   return (
      <footer className="site-footer">
         <div className="footer-content">
            <div className="footer-logo">
               <img
                  src="/logos/logo-white.png"
                  alt="South Weber Country Fair Days Logo"
               />
               <p>© 2024 South Weber Country Fair Days</p>
            </div>
            <div className="footer-links">
               <div className="footer-column">
                  <h3>About</h3>
                  <ul>
                     <li>
                        <Link to="/about">About Us</Link>
                     </li>
                     <li>
                        <Link to="/committee">Committee</Link>
                     </li>
                     <li>
                        <Link to="/history">History</Link>
                     </li>
                  </ul>
               </div>
               <div className="footer-column">
                  <h3>Events</h3>
                  <ul>
                     <li>
                        <Link to="/schedule">Event Schedule</Link>
                     </li>
                     <li>
                        <Link to="/activities">Activities</Link>
                     </li>
                     <li>
                        <Link to="/attractions">Attractions</Link>
                     </li>
                  </ul>
               </div>
               <div className="footer-column">
                  <h3>Information</h3>
                  <ul>
                     <li>
                        <Link to="/tickets">Tickets</Link>
                     </li>
                     <li>
                        <Link to="/vendors">Vendors</Link>
                     </li>
                     <li>
                        <Link to="/faq">FAQ</Link>
                     </li>
                  </ul>
               </div>
               <div className="footer-column">
                  <h3>Connect</h3>
                  <ul>
                     <li>
                        <Link to="/contact">Contact Us</Link>
                     </li>
                     <li>
                        <a
                           href="https://www.facebook.com/SouthWeberCountryFairDays"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           Facebook
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://www.instagram.com/swcountryfairdays?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           Instagram
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
}
