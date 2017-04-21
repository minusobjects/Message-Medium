import React from 'react';

// import HomeNavContainer from './home_nav/home_nav_container'
import Home from './home/home';


const App = ({ children }) => (
  <div>
    < Home />
    { children }
  </div>
);

export default App;
