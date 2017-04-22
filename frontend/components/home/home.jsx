import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

import HomeNavContainer from '../home_nav/home_nav_container';

class Home extends React.Component {
	constructor(props) {
		super(props);
    this.state = {scrollTop: 0, scrollDir: 'down'};

    this.handleScroll = this.handleScroll.bind(this);
	}

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.props.fetchAllStories();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if(($(document).scrollTop()) > this.state.scrollTop){
      // console.log('scroll down!');
      this.setState({scrollDir: 'down'});
    } else {
      // console.log('scroll up!');
      this.setState({scrollDir: 'up'});
    }
    this.setState({scrollTop: $(document).scrollTop()});
  }

  render() {

    let stories;
      if(this.props.stories){
        stories = this.props.stories.map((story) => {
          return(
            <li>
              <img src={story.main_image_url} />
              <br />
              <Link to={`/stories/${story.id}`}>
              { story.title }
              </Link>
              <br />
              { story.author_name }
              <br />
              { story.date }
              <br />
              { story.description }
              <br />
            </li>
          );
        });
      }
    return(
      <div>
        < HomeNavContainer scrollDir={this.state.scrollDir} scrollTop={this.state.scrollTop}/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        I am the home!
        <br />
        <br />
        <ul>
          { stories }
        </ul>
          <img src='https://s3.us-east-2.amazonaws.com/message-dev/users/seed_photos/fluffy.jpg' />
          <br /><br />
      </div>
    );
  }

}

export default withRouter(Home);
