import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class HomeNav extends React.Component {
	constructor(props) {
		super(props);
    this.handleLogout = this.handleLogout.bind(this);
	}

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => hashHistory.push('/'));
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
        &nbsp;/ Sign in as guest
      </div>
    );

    let helloMessage = ' ';
    let buttons;

    if(this.props.loggedIn){
      helloMessage = `Hello, ${this.props.currentUser.name}!`;
      buttons = logoutButton;
    } else {
      buttons = sessionButtons;
    }

    return(
      <div className='nav-outer'>
        <div className='home-nav'>
          <img src='assets/bad_logo.png' height='40px' id='logo' />
          <div className='nav-right'>
            <div className='hello-message'>
              { helloMessage }
            </div>
            <div className='write-story-message'>
              <a href='#'>Write a Story</a>
            </div>
            { buttons }
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(HomeNav);
