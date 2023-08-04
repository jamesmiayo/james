import React from 'react';
import Profile from './components/profile/Profile.jsx';
import About from './components/about/About.jsx';
import Nav from './components/nav/Nav.jsx';
import Experience from './components/experience/Experience.jsx';

const App = () => {
  return (
    <div>
      <div>VERSION CONTROL: 10</div>
      <Nav />
      <Profile />
      <About />
      <Experience />
    </div>
  );
};

export default App;
