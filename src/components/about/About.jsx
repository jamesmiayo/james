import React from 'react';
import profile2 from '../../assets/Images/me1.png';
import './about.css';
import { MdWorkHistory } from 'react-icons/md';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FaCertificate } from 'react-icons/fa';
import { GiDiploma } from 'react-icons/gi';
import { BsHouseFill } from 'react-icons/bs';
import { FaMailBulk } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about">
      <h5>Who am I</h5>
      <h1>About me</h1>
      <div className="container about__container">
        <div className="about__about-image">
          <div className="about__image">
            <img src={profile2} alt="about_profile-img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdWorkHistory className="about__icon" />
              <h5>Experience</h5>
              <small>9+ Years Working </small>
            </article>
            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Projects</h5>
              <small>10+ </small>
            </article>
            <article className="about__card">
              <FaCertificate className="about__icon" />
              <h5>Certificates</h5>
              <small>10+ </small>
            </article>
          </div>
          <p>
            Tech savvy and dedicated IT Personnel with over 9 years of
            experience in a Networking Company. Eager to offer computer skills
            in both hardware and software. Currently upskilling and taking the
            path for professional web development to become a full-stack
            developer.
          </p>

          <a href="#contact" className="btn btn-primary">
            Message me
          </a>

          <article className="education__card">
            <GiDiploma className="education__icon" size={30} />
            <h5>Education :</h5>
            <small className="text-light">
              B.S. Information Technology 2008-2012
            </small>
            <small className="text-light">STI College - Ortigas Cainta</small>

            <BsHouseFill className="education__icon" size={30} />
            <h5>Address :</h5>
            <small className="text-light">Santolan Pasig City</small>

            <FaMailBulk className="education__icon" size={30} />
            <h5>Email :</h5>
            <small className="text-light">it_jamesmiayo25@yahoo.com</small>

            <FiPhoneCall className="education__icon" size={30} />
            <h5>Phone :</h5>
            <small className="text-light">09913787181</small>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
