import React from 'react';
import './profile.css';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import profile1 from '../../assets/Images/me3.jpg';

import { FaDatabase } from 'react-icons/fa';
import { FaNetworkWired } from 'react-icons/fa';
import { BsFileCodeFill } from 'react-icons/bs';
import { BiSolidCctv } from 'react-icons/bi';

import CTA from './CTA';

const Profile = () => {
  return (
    <section id="profile">
      <h5>Hi, I'm</h5>
      <h1>James Miayo</h1>
      <h5 className="text-light itprof">IT Profesional</h5>

      <div className="container profile__container">
        <div className="profile__socials">
          <a
            href="https://github.com/jamesmiayo"
            target="##"
            className="profile__socials-icon"
          >
            <BsGithub className="social__icon" size={30} />
          </a>
          <a
            href="https://facebook.com/james.miayo"
            target="##"
            className="profile__socials-icon"
          >
            <BsFacebook className="social__icon" size={30} />
          </a>

          <a
            href="https://www.instagram.com/jamesmiayo/"
            target="##"
            className="profile__socials-icon"
          >
            <BsInstagram className="social__icon" size={30} />
          </a>
        </div>

        <div className="profile__image_area">
          <div className="profile__outer-circle">
            <span>
              <FaDatabase size={30} />
            </span>
            <span>
              <FaNetworkWired size={30} />
            </span>
            <span>
              <BsFileCodeFill size={30} />
            </span>
            <span>
              <BiSolidCctv size={30} />
            </span>
          </div>

          <div className="profile__inner-circle">
            <img src={profile1} alt="image1" />
          </div>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
      <CTA />
    </section>
  );
};

export default Profile;
