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
    <li><button onClick={this.handleLogout}>Log out!</button></li>
    </ul>);
    const sessionButtons = (
    <ul className='session-buttons'>
    <li><Link to='/login'>Login!</Link></li>
    <li><Link to='/signup'>Signup!</Link></li>
    </ul>);

    let isLoggedIn;
    let helloMessage;
    let buttons;

    if(this.props.loggedIn){
      isLoggedIn = 'You ARE logged in!';
      helloMessage = `Hello, ${this.props.currentUser.name}!`;
      buttons = logoutButton;
    } else {
      isLoggedIn = 'You are NOT logged in!';
      buttons = sessionButtons;
    }

    return(
        <div className='home-nav'>
          { buttons }
          I am the home nav!
          <br /><br />
          { isLoggedIn }
          <br /><br />
          { helloMessage }
        </div>
    );
  }

}

export default withRouter(HomeNav);
