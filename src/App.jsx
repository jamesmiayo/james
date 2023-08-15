import React from 'react';
import Profile from './components/profile/Profile.jsx';
import About from './components/about/About.jsx';
import Nav from './components/nav/Nav.jsx';
import Experience from './components/experience/Experience.jsx';
import Footer from './components/footer/Footer.jsx';

const App = () => {
  return (
    <div>
      <div>VERSION CONTROL: 11v</div>
      <Nav />
      <Profile />
      <About />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
