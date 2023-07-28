import React from 'react';
import Profile from './components/profile/Profile.jsx';
import About from './components/about/About.jsx';
import Nav from './components/nav/Nav.jsx';

const App = () => {
  return (
    <div>
      <div>VERSION CONTROL: 5</div>
      <Nav />
      <Profile />
      <About />
    </div>
  );
};

export default App;
