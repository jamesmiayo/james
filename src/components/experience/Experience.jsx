import React from 'react';
import './experience.css';
import data from './data.jsx';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container experience__container">
        <h5>My skills to offer</h5>
        <h1>Knowledge</h1>

        <div className="experience__skills">
          {data.skills.map((skill) => (
            <div className="experience__skill" key={skill.slug}>
              <img src={skill.image} alt={skill.name} />
              <h3>{skill.name}</h3>
              <h4>{skill.level}</h4>
              <h5>{skill.description}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
