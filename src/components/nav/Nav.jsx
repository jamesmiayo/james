import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { MdDesignServices } from 'react-icons/md';
import { GiTalk } from 'react-icons/gi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <nav>
      <a
        href="#profile"
        onClick={() => setActiveNav('#profile')}
        className={activeNav === '#profile' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <MdDesignServices />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <GiTalk />
      </a>
    </nav>
  );
};

export default Nav;
