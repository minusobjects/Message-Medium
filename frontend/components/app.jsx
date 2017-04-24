import React from 'react';

// import HomeNavContainer from './home_nav/home_nav_container'
import HomeContainer from './home/home_container';


const App = ({ children }) => (
  <div>
    < HomeContainer />
    { children }
  </div>
);

export default App;
