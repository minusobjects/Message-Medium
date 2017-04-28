import React from 'react';
import { Link, hashHistory } from 'react-router';

import HomeFeedItem from './home_feed_item';

class HomeFeed extends React.Component {
	constructor(props) {
		super(props);
	}

  render(){
    let stories;
    if(this.props.stories){

			let orderedStories = this.props.stories.sort((a, b) => { return b.created_at.localeCompare(a.created_at); });
      // select the first 23 stories for the home page
      let firstFour = orderedStories.slice(0,4);
      let secondFour = orderedStories.slice(4,8);
      let thirdFive = orderedStories.slice(8,13);
      let fourthFive = orderedStories.slice(13,18);
      let fifthFive = orderedStories.slice(18,23);

      firstFour = firstFour.map((story) => {
        return(
          < HomeFeedItem story={story} key={story.id} />
        );
      });

      secondFour = secondFour.map((story) => {
        return(
          < HomeFeedItem story={story} key={story.id} />
        );
      });

      thirdFive = thirdFive.map((story) => {
        return(
          < HomeFeedItem story={story} key={story.id} />
        );
      });

      fourthFive = fourthFive.map((story) => {
        return(
          < HomeFeedItem story={story} key={story.id} />
        );
      });

      fifthFive = fifthFive.map((story) => {
        return(
          < HomeFeedItem story={story} key={story.id} />
        );
      });


      stories = (<div>
            <div className='groupOfFour'>{firstFour}</div>
            <div className='groupOfFour'>{secondFour}</div>
            <div className='groupOfFive'>{thirdFive}</div>
            <div className='groupOfFive'>{fourthFive}</div>
            <div className='groupOfFive'>{fifthFive}</div>
          </div>);
    }

    return(
      <div className='homeFeed'>
        { stories }
      </div>
    );
  }
}

export default HomeFeed;
