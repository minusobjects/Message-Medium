import React from 'react';
import { Link, withRouter } from 'react-router';

class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: ""};
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}

  // this works, but is causing an infinite loop for right now
	// componentDidUpdate() {
	// 	this.redirectIfLoggedIn();
	// }
	// redirectIfLoggedIn() {
	// 	if (this.props.loggedIn) {
	// 		this.props.router.push("/");
	// 	}
	// }

  // the DRY version - we'll see
	// handleSubmit(e) {
	// 	e.preventDefault();
	// 	const user = this.state;
		// this.props.processForm({user});
	// }
	// navLink() {
	// 	if (this.props.formType === "login") {
	// 		return <Link to="/signup">sign up instead</Link>;
	// 	} else {
	// 		return <Link to="/login">log in instead</Link>;
	// 	}
	// }

  updateField(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleLogin(e) {
  	e.preventDefault();
  	const user = this.state;
    this.props.login({user});
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
    let isLoggedIn;
    if(this.props.loggedIn){
      isLoggedIn = 'You ARE logged in!';
    } else {
      isLoggedIn = 'You are NOT logged in!';
    }
		return (
			<div>
				<form onSubmit={this.handleLogin}>
					Welcome to this app!! Login and stuff!
					<br/>
            (maybe some options could go here)
            <br />
            <br />
            { isLoggedIn }
            <br />
					{this.renderErrors()}
						<br/>
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.updateField("username")}
								/>
						</label>
						<br/>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.updateField("password")}
								/>
						</label>
						<br/>
						<input type="submit" value="Log in!" />
				</form>
        <br />
        <br />
        <button onClick={this.handleLogout}>Log out!</button>
        <br />
			</div>
		);
	}

}

export default withRouter(AuthForm);
