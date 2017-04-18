import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => (
    ReactDOM.render(<Root store={configureStore()} />,
  document.getElementById('root'))
));
