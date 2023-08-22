import React from 'react';
import portf1 from '../../assets/websites/maeforeverkayjames.png';
import portf2 from '../../assets/websites/knldeluxetreats.png';
import './portfolio.css';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Completed Projects</h5>
      <h1>Portfolio</h1>
      <div className="container portfolio__container">
        <div className="portfolio_card">
          <div className="portfolio__img">
            <img src={portf1} alt="" />
          </div>
          <div className="portfolio__details">
            <h3>Wedding RVSP Website</h3>
            <a
              href="http://maeforeverkayjames.com/"
              className="btn btn-primary"
              target="##"
            >
              <span>
                <CgWebsite size={20} />
              </span>
              View Website
            </a>
            <a
              href="https://github.com/jamesmiayo/maeforeverkayjames"
              className="btn btn-secondary"
              target="##"
            >
              <span>
                <BsGithub size={20} />
              </span>
              View Git
            </a>
          </div>
        </div>

        <div className="portfolio_card">
          <div className="portfolio__img">
            <img src={portf2} alt="" />
          </div>
          <div className="portfolio__details">
            <h3>Food Website</h3>
            <a
              href="https://jamesmiayo.github.io/knldeluxetreats/"
              className="btn btn-primary"
              target="##"
            >
              <span>
                <CgWebsite size={20} />
              </span>
              View Website
            </a>
            <a
              href="https://github.com/jamesmiayo/knldeluxe"
              className="btn btn-secondary"
              target="##"
            >
              <span>
                <BsGithub size={20} />
              </span>
              View Git
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
