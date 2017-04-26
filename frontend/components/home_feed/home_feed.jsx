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
      // select the first 23 stories for the home page
      let firstFour = this.props.stories.slice(0,4);
      let secondFour = this.props.stories.slice(4,8);
      let thirdFive = this.props.stories.slice(8,13);
      let fourthFive = this.props.stories.slice(13,18);
      let fifthFive = this.props.stories.slice(18,23);

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
