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

const Profile = () => {
  return (
    <section id="profile">
      <div className="container profile__container">
        <div className="profile__socials">
          <a
            href="https://github.com/jamesmiayo"
            target="##"
            className="profile__socials-icon"
          >
            <BsGithub size={40} />
          </a>
          <a
            href="https://facebook.com/james.miayo"
            target="##"
            className="profile__socials-icon"
          >
            <BsFacebook size={30} />
          </a>

          <a
            href="https://www.instagram.com/jamesmiayo/"
            target="##"
            className="profile__socials-icon"
          >
            <BsInstagram size={20} />
          </a>
        </div>
        <div className="profile__info">
          <h5>Hi, I'm</h5>
          <h1>James</h1>
          <h5 className="text-light itprof">IT Profesional</h5>
          {/* <p>
            Tech savvy and dedicated IT Personnel with over 7 years of
            experience in a Networking Company. Eager to offer computer skills
            in both hardware and software. Currently upskilling and taking the
            path for professional web development to become a full-stack
            developer.
          </p> */}
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
      </div>
    </section>
  );
};

export default Profile;
