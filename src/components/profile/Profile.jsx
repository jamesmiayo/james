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
import { IoLogoDribbble } from 'react-icons/io';

import CTA from './CTA';

const Profile = () => {
  return (
    <section id="profile">
      <h5>Hi, I'm</h5>
      <h1>James Miayo</h1>
      <h5 className="text-light itprof">IT Professional</h5>

      <div className="container profile__container">
        <div className="profile__image_area">
          <div className="profile__outer-circle">
            <span>
              <FaDatabase size={15} />
            </span>
            <span>
              <FaNetworkWired size={15} />
            </span>
            <span>
              <BsFileCodeFill size={15} />
            </span>
            <span>
              <BiSolidCctv size={15} />
            </span>
          </div>

          <div className="profile__inner-circle">
            <img src={profile1} alt="image1" />
          </div>

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

            <a
              href="https://dribbble.com/it_jamesmiayo25"
              target="##"
              className="profile__socials-icon"
            >
              <IoLogoDribbble className="social__icon" size={40} />
            </a>
          </div>
        </div>

        {/* <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}

        <CTA />
      </div>
    </section>
  );
};

export default Profile;
