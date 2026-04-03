import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="manga-footer">
      <div className="manga-footer-inner">
        
        {/* Brand / Intel */}
        <motion.div 
          className="footer-panel footer-brand"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="footer-logo">
            <div className="footer-logo-hanko">A</div>
            <div className="footer-logo-text">
              <span>ANANT MOTI</span>
              <span className="footer-logo-jp">開発者</span>
            </div>
          </div>
          <p className="footer-desc">
            Forging digital constructs and high-speed architectures. Where raw execution meets clean code.
          </p>
          <div className="manga-footer-socials">
            <a href="https://www.linkedin.com/in/anant-moti-465893287" target="_blank" rel="noreferrer" className="manga-social-square">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.996 16V15.9993H16V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33 5.93465 8.888 6.77398H8.84133V5.31732H5.65933V15.9993H8.97267V10.71C8.97267 9.31732 9.23667 7.97065 10.9613 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z"/>
                  <path d="M0.264008 5.31812H3.58134V16.0001H0.264008V5.31812Z"/>
                  <path d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0Z"/>
                </svg>
            </a>
            <a href="https://github.com/DISCONECTED-png" target="_blank" rel="noreferrer" className="manga-social-square">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="currentColor" fill="none">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
          </div>
        </motion.div>

        {/* Nav Links */}
        <motion.div 
          className="footer-panel footer-nav"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h5 className="footer-heading">DIRECTORY <span className="footer-heading-jp">リンク</span></h5>
          <ul>
            {["Home", "Skills", "Experience", "Project", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`}>
                  <span className="nav-bracket">[</span> {item.toUpperCase()} <span className="nav-bracket">]</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Data */}
        <motion.div 
          className="footer-panel footer-contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h5 className="footer-heading">NETWORK <span className="footer-heading-jp">ネットワーク</span></h5>
          <div className="footer-contact-row">
            <span className="contact-icon">[ E ]</span>
            <span>anantmoti05@gmail.com</span>
          </div>
          <div className="footer-contact-row">
            <span className="contact-icon">[ P ]</span>
            <span>+91 8447082847</span>
          </div>
          <div className="footer-contact-row">
            <span className="contact-icon">[ L ]</span>
            <span>IIIT Agartala, India</span>
          </div>
        </motion.div>

      </div>

      {/* Bottom Terminal Bar */}
      <div className="manga-footer-bottom">
        <div className="footer-bottom-content">
          <p>
            <span className="red-text">©</span> {new Date().getFullYear()} ANANT MOTI. // ALL RIGHTS RESERVED.
          </p>
          <a href="#home" className="tactical-back-top">
            RETURN_TO_TOP 
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
              <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};