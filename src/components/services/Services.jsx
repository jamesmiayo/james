import React from 'react';
import './services.css';
import { MdDeveloperMode } from 'react-icons/md';
import { FaTools } from 'react-icons/fa';
import { LuNetwork } from 'react-icons/lu';

const Services = () => {
  return (
    <section id="services">
      <h5>What can I do for you?</h5>
      <h1>Services</h1>
      <div className="container services__container">
        <div className="services__card">
          <div className="services__logo">
            <MdDeveloperMode size={50} className="services__icon" />
          </div>
          <div className="servicesinfo__card">
            <h5>Web Development</h5>
          </div>
          <div className="servicesdetail__card">
            <small>Web design</small>
            <br />
            <small>Landing Page</small>
            <br />
            <small>E-Commerce</small>
            <br />
            <small>Maintenance</small>
            <br />
            <small>Hosting</small>
            <br />
            <small>Database Administration</small>
            <br />
          </div>

          <a href="#contact" className="btn btn-secondary">
            Message me
          </a>
        </div>

        <div className="services__card">
          <div className="services__logo">
            <FaTools size={50} className="services__icon" />
          </div>
          <div className="servicesinfo__card">
            <h5>Technical Services</h5>
          </div>
          <div className="servicesdetail__card">
            <small>Desktop Repair</small>
            <br />
            <small>Laptop</small>
            <br />
            <small>Printer</small>
            <br />
            <small>Data Recovery</small>
            <br />
            <small>Virus Removal</small>
            <br />
            <small>Network Design</small>
            <br />
            <small>Technical Support</small>
          </div>
          <a href="#contact" className="btn btn-secondary">
            Message me
          </a>
        </div>

        <div className="services__card">
          <div className="services__logo">
            <LuNetwork size={50} className="services__icon" />
          </div>
          <div className="servicesinfo__card">
            <h5>Installation</h5>
          </div>
          <div className="servicesdetail__card">
            <small>CCTV Installation</small>
            <br />
            <small>Network Installation</small>
          </div>
          <a href="#contact" className="btn btn-secondary">
            Message me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
