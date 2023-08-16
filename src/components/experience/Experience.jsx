import React from 'react';
import './experience.css';
import data from './data';
import imgcert from '../../assets/cert/cert2.jpg';
import imgcert2 from '../../assets/cert/cert.jpg';
import imgcert3 from '../../assets/cert/cert3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Experience = () => {
  return (
    <>
      <section id="experience">
        <h5>My skills to offer</h5>
        <h1>Knowledge</h1>
        <div className="container experience__container">
          <div className="experience__skills">
            {data.skills.map((skill) => (
              <div className="experience__skill" key={skill.slug}>
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="skill__icon"
                />
                <h5>{skill.name}</h5>
                <small className="text-light">{skill.level}</small>
                {/* <p>{skill.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="certificate">
        <h1>Certificate</h1>
        <div className="container certificate__container">
          <div className="swiper__container">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={imgcert} alt="imgcert" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={imgcert2} alt="imgcert2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={imgcert3} alt="imgcert3" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section id="job">
        <h1>Work Experience</h1>

        {/* <div className="container job__container">
          <div className="jobinfo__container">
            <h2>2015-2019</h2>
            <h5>Database and Network Admin Staff</h5>
            <small className="text-light">
              IFERN CORPORATION l Norton & Harrison Compound Sheridan Street,
              Corner Pines, Mandaluyong, Metro Manila
            </small>
          </div>
          <div className="jobdetail__container">
            <small>
              Working with database software to find ways to store, organize and
              manage SQL data. Managing database access, security/integrity and
              backup procedure. Keeping database up-to-date, optimizing,
              troubleshooting, writing disaster recovery, testing and modifying
              database to ensure that they operate reliably. Installing and
              configuring software, hardware and computer networks and system,
              identifying and solving any problem that arise with computer
              network and systems. Maintaning existing software and hardware and
              upgrading any that have become
            </small>
          </div> */}

        {data.experiences.map((experience) => (
          <div className="container job__container" key={experience.position}>
            <div className="jobinfo__container">
              <h2>{experience.year}</h2>
              <h5>{experience.position}</h5>
              <small className="text-light">{experience.company}</small>
            </div>
            <div className="jobdetail__container">
              <small>{experience.jobdetail}</small>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Experience;
