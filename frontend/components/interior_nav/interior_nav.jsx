import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter, hashHistory } from 'react-router';

class InteriorNav extends React.Component {
	constructor(props) {
		super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.guestLogin = this.guestLogin.bind(this);

    this.mainClass = 'nav-outer';
	}

  componentDidMount(){
  }

  // I'm sure this could be nicer, refactoring-wise.
  // could I just change the 'position' rather than the class?
  // meow
  componentWillReceiveProps(newProps){
    const elem = ReactDOM.findDOMNode(this);
    if((newProps.scrollDir === 'up') && (newProps.scrollTop > 80)){
      elem.style.opacity = 0;
      elem.style.top = '-80px';
      this.mainClass = 'nav-outer-TEST';
      window.requestAnimationFrame(function() {
        elem.style.transition = "top 200ms, opacity 150ms";
        elem.style.opacity = 1;
        elem.style.top = '0px';
      });
    } else if((newProps.scrollDir === 'down') && (newProps.scrollTop > 80)) {
      let fadePromise = new Promise(function(resolve, reject){
      elem.style.opacity = 1;
      elem.style.top = '0px';
      window.requestAnimationFrame(function() {
        elem.style.transition = "top 200ms, opacity 150ms";
        elem.style.opacity = 0;
        elem.style.top = '-80px';
      });
    });
    fadePromise.then(()=>{this.mainClass = 'nav-outer';});

    }
    else if((newProps.scrollDir === 'down') && (newProps.scrollTop < 80)) {
    this.mainClass = 'nav-outer'; }
    else { this.mainClass = 'nav-outer-TEST'; }
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => hashHistory.push('/'));
  }

  guestLogin(e) {
    e.preventDefault();
    let guest = {user: {username: 'guest', password: 'password'}};
    this.props.login(guest).then(() => hashHistory.push('/'));
  }

  render() {
    const logoutButton =(
    <ul className='session-buttons'>
    <a href='#' onClick={this.handleLogout}>Sign out</a>
    </ul>);
    const sessionButtons = (
      <div className='session-buttons'>
        <Link to='/signin'>Sign in</Link>
        &nbsp;/&nbsp;
        <Link to='/signup'>Sign up</Link>
        &nbsp;/ <span className='guest-link'>
        <a href='#' onClick={ this.guestLogin }>Sign in as guest</a>
        </span>
      </div>
    );

    let helloMessage = ' ';
    let buttons;
    let avatarBox;
    let imageUrl;

    if(this.props.loggedIn){
      helloMessage = `Hello, ${this.props.currentUser.name}!`;
      buttons = logoutButton;
      imageUrl = this.props.currentUser.image_url;
      avatarBox = (<div className='avatar-container'>
        <img src={ imageUrl } />
      </div>);
    } else {
      buttons = sessionButtons;
    }

    return(
      <div className={ this.mainClass }>
        <div className='home-nav'>
					<Link to='/'>
	          <img src={ window.images.first_logo } height='40px' id='logo' />
					</Link>
          <div className='nav-right'>
            <div className='hello-message'>
              { helloMessage }
            </div>
            <div className='write-story-message'>
              <Link to='/write'>Write a Story</Link>
            </div>
            { buttons }
            <div className='mag-glass'>
              <img src={window.images.mag_glass} />
            </div>
            { avatarBox }
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(InteriorNav);
