import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
);

export default Root;



// <IndexRoute component={EventIndexContainer} />
// <Route path="/events/new" component={EventFormContainer} />
// <Route path="/events" component={EventIndexContainer} />
// <Route path="/events/:eventId" component={EventShowContainer} />
// <Route path="/events/:eventId/edit" component={EventFormContainer} />
