import React from 'react';
import { Link, hashHistory } from 'react-router';

import MixedFeedItem from './mixed_feed_item';

class MixedFeed extends React.Component {
  // pass in an array of mixed items from the profile page
  constructor(props) {
		super(props);

	}

  render(){
    let mixedItems;
    let n = 0;
    if(this.props.mixedItems){
      mixedItems = this.props.mixedItems.map((mixedItem) => {
        n = n + 1;
        return(
          < MixedFeedItem
          mixedItem={mixedItem}
          currentUser={this.props.currentUser}
          loggedIn={this.props.loggedIn}
          destroyLike={this.props.destroyLike}
          createLike={this.props.createLike}
          responses={this.props.responses}
          key={n} />
        );
      });
    }

    return(
      <div className='mixedFeed'>
        { mixedItems }
      </div>
    );
  }
}

export default MixedFeed;
