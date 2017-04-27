import React from 'react';
import { Link, hashHistory } from 'react-router';

import MixedFeed from '../mixed_feed/mixed_feed';

class Recommended extends React.Component {
  constructor(props) {
		super(props);
	}

  render(){
  return(
      <div className='profile-recommended'>
        <MixedFeed
        mixedItems={this.props.mixedItems}
        currentUser={this.props.currentUser}
        loggedIn={this.props.loggedIn}
        destroyLike={this.props.destroyLike}
        createLike={this.props.createLike}
        responses={this.props.responses}
        />
      </div>
    );
  }
}

export default Recommended;
