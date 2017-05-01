import React from 'react';

import HomeContainer from './home/home_container';


const App = ({ children }) => (
  <div>
    < HomeContainer />
    { children }
  </div>
);

export default App;
