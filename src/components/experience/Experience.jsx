import React from 'react';
import './experience.css';
import data from './data';

const Experience = () => {
  return (
    <section id="experience">
      <h5>My skills to offer</h5>
      <h1>Knowledge</h1>
      <div className="container experience__container">
        <div className="experience__skills">
          {data.skills.map((skill) => (
            <div className="experience__skill" key={skill.slug}>
              <img src={skill.image} alt={skill.name} className="skill__icon" />
              <h5>{skill.name}</h5>
              <small className="text-light">{skill.level}</small>
              {/* <p>{skill.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
