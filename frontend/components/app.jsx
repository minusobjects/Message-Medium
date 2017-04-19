import React from 'react';

import AuthFormContainer from './auth_form/auth_form_container';

const App = ({ children }) => (
  <div>
    <h3>I am the App!!</h3>
    <br />
    < AuthFormContainer />
    { children }
  </div>
);

export default App;



// { children }
// as arg
