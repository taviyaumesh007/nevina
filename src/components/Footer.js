import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#about">About</a>
        <span>|</span>
        <a href="#help">Help</a>
        <span>|</span>
        <a href="#terms">Terms & Conditions</a>
        <span>|</span>
        <a href="#privacy">Privacy</a>
        <span>|</span>
        <a href="#copyright">Copyright Policy</a>
        <span>|</span>
        <a href="#contact">Contact Us</a>
      </div>

      <div className="footer-copyright">
        <span>©Curioushit 2023 - All Rights Reserved</span>
      </div>

      <div className="footer-socials">
        <a href="#facebook" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#twitter" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#linkedin" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#instagram" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#tiktok" aria-label="TikTok">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
