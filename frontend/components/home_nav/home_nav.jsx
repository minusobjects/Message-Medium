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
    // should be with a promise?
  }

  render() {

    const logoutButton = <button onClick={this.handleLogout}>Log out!</button>;
    const sessionButtons = (<div>
    <Link to='/login'>Login!</Link>
    <br /><br />
    <Link to='/signup'>Signup!</Link>
    </div>);

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
        <div>
          I am the home nav!
          <br /><br />
          { isLoggedIn }
          <br /><br />
          { helloMessage }
          <br /><br />
          { buttons }
        </div>
    );
  }

}

export default withRouter(HomeNav);
