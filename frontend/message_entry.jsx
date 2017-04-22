import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// test stuff
// meow
// import {storyIndex, storyShow} from './util/story_api_util';
// window.storyIndex = storyIndex;
// window.storyShow = storyShow;


document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  return(
    ReactDOM.render(<Root store={ store } />,
    document.getElementById('root'))
  );
}
);
