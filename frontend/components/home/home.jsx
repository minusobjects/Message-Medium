import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

import HomeNavContainer from '../home_nav/home_nav_container';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return(
      <div>
        < HomeNavContainer />
        I am the home!
      </div>
    );
  }

}

export default withRouter(Home);
