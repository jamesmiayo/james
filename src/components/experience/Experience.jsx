import React, { useState } from 'react';
import './experience.css';
import data from './data';
import imgcert from '../../assets/cert/cert2.jpg';
import imgcert2 from '../../assets/cert/cert.jpg';
import imgcert3 from '../../assets/cert/cert3.jpg';
import imgcert4 from '../../assets/cert/cert4.jpg';
import imgcert5 from '../../assets/cert/cert5.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Experience = () => {
  const [show, setShow] = useState(false);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <section id="experience">
        <h5>My skills to offer</h5>
        <h1>Knowledge</h1>

        <div className="container">
          <div className="bloc-tabs">
            <div
              className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(1)}
            >
              <h3>Tech Stack</h3>
            </div>
            <div
              className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(2)}
            >
              <h3>Certificates</h3>
            </div>
            <div
              className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(3)}
            >
              <h3>Experience</h3>
            </div>
          </div>

          <div className="content-tabs">
            <div className={toggleState === 1 ? 'active-content' : 'content'}>
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
            </div>

            <div className={toggleState === 2 ? 'active-content' : 'content'}>
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
                    <SwiperSlide>
                      <img src={imgcert4} alt="imgcert4" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={imgcert5} alt="imgcert5" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>

            <div className={toggleState === 3 ? 'active-content' : 'content'}>
              <div className="container exp__container">
                {data.experiences.map((experience) => (
                  <div className="job__container" key={experience.id}>
                    <div className="jobinfo__container">
                      <h2>{experience.year}</h2>
                      <h5>{experience.position}</h5>
                      <small className="text-light">{experience.company}</small>
                      <br />
                      <h5 className="btn-read" onClick={() => setShow(!show)}>
                        Read
                      </h5>
                    </div>
                    {show && (
                      <div className="jobdetail__container">
                        <small>{experience.jobdetail}</small>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
