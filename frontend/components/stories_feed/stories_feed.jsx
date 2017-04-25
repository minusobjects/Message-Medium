import React from 'react';
import { Link, hashHistory } from 'react-router';

import StoriesFeedItem from './stories_feed_item';

class StoriesFeed extends React.Component {
	constructor(props) {
		super(props);
	}

  render(){
    let stories;
    if(this.props.stories){
      stories = this.props.stories.map((story) => {
        return(
          < StoriesFeedItem story={story} key={story.id} />
        );
      });
    }

    return(
      <ul className='storiesFeed'>
        { stories }
      </ul>
    );
  }
}

export default StoriesFeed;
