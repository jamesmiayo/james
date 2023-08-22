import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import './footer.css';

import skr from '../../assets/icons/Seeker.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* <div className="seeker__icon">
          <img src={skr} alt="seeker icon" />
        </div> */}
        <a href="#profile" className="footer__logo">
          James Miayo
        </a>
        {/* <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul> */}
        <div className="footer__socials">
          <a href="https://facebook.com">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com">
            <FiInstagram />
          </a>
          <a href="https://twitter.com">
            <IoLogoTwitter />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; SeeKeR. All rights reserved</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
