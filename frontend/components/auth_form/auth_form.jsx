import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';


class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: ""};
		this.handleLogin = this.handleLogin.bind(this);
	}

  componentDidMount() {
    this.redirectIfLoggedIn();
  }
	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}
	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			hashHistory.push("/");
		}
	}

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
			</div>
		);
	}

}

export default withRouter(AuthForm);
