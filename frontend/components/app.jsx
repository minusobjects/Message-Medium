import React from 'react';

import AuthFormContainer from './auth_form/auth_form_container';


const App = ({ children }) => (
  <div>
    <h3>I am the App!!</h3>
    <br /><br />
    Children go here:
    <br /><br />
    { children }
  </div>
);

export default App;
