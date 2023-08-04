import React from 'react';
import './experience.css';
import data from './data';
import imgcert from '../../assets/cert/cert.jpg';
import imgcert2 from '../../assets/cert/cert2.jpg';
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

      <h1>Certificate</h1>
      <div className="container certificate__container">
        <div className="swiper__container">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
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
    </>
  );
};

export default Experience;
