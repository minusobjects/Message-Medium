import React from 'react';

import HomeNavContainer from './home_nav/home_nav_container'

const App = ({ children }) => (
  <div>
    < HomeNavContainer />
    { children }
  </div>
);

export default App;
