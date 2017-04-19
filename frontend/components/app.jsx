import React from 'react';

import HomeNavContainer from './home_nav/home_nav_container'

const App = ({ children }) => (
  <div>
    <h3>I am the App!!</h3>
    <br /><br />
    < HomeNavContainer />
    <br /><br />
    Children go here:
    <br /><br />
    { children }
  </div>
);

export default App;
