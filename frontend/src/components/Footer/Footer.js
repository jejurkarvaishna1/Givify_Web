import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn"; // Import the LinkedIn icon
import "./footerStyles.css"; // Import your CSS file

const Footer = () => {
  return (
    <footer
      className="footer-container"
      style={{ maxWidth: "1226.5px", margin: "0 auto" }}
    >
      <div className="footer-links">
        <div className="footer-links-line">
          <a href="/home" className="footer-link">
            Home
          </a>
          <a href="/about" className="footer-link">
            About Us
          </a>
          <a href="/contact" className="footer-link">
            Contact Us
          </a>
          <a href="/donate" className="footer-link">
            Donate
          </a>
        </div>
      </div>
      <div>
        <div className="social-icons">
          <a href="https://www.instagram.com/">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/">
            <FacebookIcon />
          </a>
          <a href="https://www.youtube.com/">
            <YouTubeIcon />
          </a>
          <a href="https://www.linkedin.com/">
            <LinkedInIcon />
          </a>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "10px", color: "white" }}>
        &copy; {new Date().getFullYear()} Givify. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
