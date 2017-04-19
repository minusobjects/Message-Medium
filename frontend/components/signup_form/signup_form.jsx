import React from 'react';
import { Link, withRouter } from 'react-router';


class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "",
    email: "", name: "", bio: "", photo_url: "" };
		this.handleSignup = this.handleSignup.bind(this);
	}

// something like this...
componentDidMount() {
  this.redirectIfLoggedIn();
}
  componentDidUpdate() {
  	this.redirectIfLoggedIn();
  }
  redirectIfLoggedIn() {
  	if (this.props.loggedIn) {
  		this.props.router.push("/");
  	}
  }

  updateField(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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
    let isLoggedIn;
    if(this.props.loggedIn){
      isLoggedIn = 'You ARE logged in!';
    } else {
      isLoggedIn = 'You are NOT logged in!';
    }
		return (
			<div>
        Create new user!
        <br/>
        <form onSubmit={this.handleSignup}>
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

export default withRouter(SignupForm);
