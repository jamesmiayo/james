import React from 'react';
import './services.css';
import { MdDeveloperMode } from 'react-icons/md';

const Services = () => {
  return (
    <section id="services">
      <h5>What can I offer</h5>
      <h1>Services</h1>
      <div className="container services__container">
        <div className="services__card">
          <div className="services__logo">
            <MdDeveloperMode size={50} />
          </div>
          <div className="servicesinfo__card">
            <h5>Web Development</h5>
          </div>
          <div className="servicesdetail__card">
            <small>Design</small>
            <br />
            <small>Design</small>
            <br />
            <small>Design</small>
            <br />
            <small>Design</small>
            <br />
            <small>Design</small>
          </div>

          <a href="#contact" className="btn btn-secondary">
            Message me
          </a>
        </div>

        <div className="services__card">
          <div className="services__logo">
            <MdDeveloperMode size={50} />
          </div>
          <div className="servicesinfo__card">
            <h5>Web Development</h5>
          </div>
          <div className="servicesdetail__card">
            <small>Design</small>
            <br />
            <small>Design</small>
            <br />
            <small>Design</small>
            <br />
            <small>Design</small>
            <br />
            <small>Design</small>
          </div>
        </div>

        <div className="services__card">
          <div className="services__logo">
            <MdDeveloperMode size={50} />
          </div>
          <div className="servicesinfo__card">
            <h5>Web Development</h5>
          </div>
          <div className="servicesdetail__card">
            <small>Design</small>
            <br />
            <small>Design</small>
            <br />
            <small>Design</small>
            <br />
            <small>Design</small>
            <br />
            <small>Design</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
