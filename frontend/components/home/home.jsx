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
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    // debugger

    // if(($(document).scrollTop() + $(window).height() / 2) > ($('body').height() / 2)){

    if(($(document).scrollTop()) > this.state.scrollTop){
      // $(this.scrollIcon).attr('class', 'fa fa-2x fa-chevron-up');
      console.log('scroll down!');
      this.setState({scrollDir: 'down'});
    } else {
      console.log('scroll up!');
      this.setState({scrollDir: 'up'});
      // $(this.scrollIcon).attr('class', 'fa fa-2x fa-chevron-down');
    }
    this.setState({scrollTop: $(document).scrollTop()});
      // let scrollTop = event.srcElement.body.scrollTop,
      //     itemTranslate = Math.min(0, scrollTop/3 - 60);
      //
      // this.setState({
      //   transform: itemTranslate
      // });
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
        <br />
        <br />
        I am the home!
        <br />
        <br />
        <div >
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          Hello!
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          How are you?
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          I am fine!
          <br /><br />
          <img src='https://s3.us-east-2.amazonaws.com/message-dev/users/seed_photos/fluffy.jpg' />
        </div>
      </div>
    );
  }

}

export default withRouter(Home);
