import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <div className="main-left-div">
        <div className="links">
          <div>
            <ul>
              <li>Mail</li>
              <li>Careers</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="input">
            <input type="text" placeholder="You can message us" />
            <button type="submit">Send</button>
          </div>
        </div>
        <div className="icons">
          <a
          className="instagram"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
          className="facebook"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
          className="linkedin"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
        <div className="copyright-text">
            <span>
            © 2025 Softskills Data Management. All rights reserved.
            </span>
        </div>
      </div>
      <iframe
      className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1243.0889835966377!2d75.56629966667263!3d20.99028771284872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90ff5a024c2eb%3A0x367554870f90b5e2!2sKit-Cat%20boarding%20%26%20playschool%20(cat%20hostel))!5e0!3m2!1sen!2sin!4v1736247256560!5m2!1sen!2sin"
        width="500"
        height="200"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Office Location"
      ></iframe>
    </div>
  );
};

export default Footer;
