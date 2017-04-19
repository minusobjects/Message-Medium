import React from 'react';
import { Link, withRouter } from 'react-router';

class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "",
    email: "", name: "", bio: "", photo_url: "" };
		// this.handleSubmit = this.handleSubmit.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.handleSignup = this.handleSignup.bind(this);
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

  handleSignup(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup({user});
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
		return (
			<div>
				<form onSubmit={this.handleLogin}>
					Welcome to this app!! Login and stuff!
					<br/>
            (maybe some options could go here - login or signup)
					{this.renderErrors()}
					<div>
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
					</div>
				</form>
        <br />
        <br />
        <button onClick={this.handleLogout}>Log out!</button>
        <br />
        <br />
        <br />
        Create new user!
        <br/>
        <form onSubmit={this.handleSignup}>
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
            <label> Name:
              <input type="text"
                value={this.state.name}
                onChange={this.updateField("name")}
                />
            </label>
            <br/>
          <label> Email:
            <input type="text"
              value={this.state.email}
              onChange={this.updateField("email")}
              />
          </label>
          <br/>
          <label> Bio:
            <input type="text"
              value={this.state.bio}
              onChange={this.updateField("bio")}
              />
          </label>
          <br/>
          <label> Photo URL:
            <input type="text"
              value={this.state.photo_url}
              onChange={this.updateField("photo_url")}
              />
          </label>
          <br/>
          <br/>
          <input type="submit" value="Submit new user!" />
        </form>
			</div>
		);
	}

}

export default withRouter(AuthForm);
