import React from 'react';
import Profile from './components/profile/Profile.jsx';
import About from './components/about/About.jsx';
import Nav from './components/nav/Nav.jsx';
import Experience from './components/experience/Experience.jsx';
import Footer from './components/footer/Footer.jsx';
import Services from './components/services/Services.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';

const App = () => {
  return (
    <div>
      <div>VERSION CONTROL: 12</div>
      <Nav />
      <Profile />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
