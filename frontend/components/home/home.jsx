import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

import HomeNavContainer from '../home_nav/home_nav_container';

import StoriesFeed from '../stories_feed/stories_feed';
import HomeFeed from '../home_feed/home_feed';

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

    return(
      <div>
        < HomeNavContainer scrollDir={this.state.scrollDir} scrollTop={this.state.scrollTop}/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        < HomeFeed stories={this.props.stories } />
        <br />
        <br />
      </div>
    );
  }

}

export default withRouter(Home);
