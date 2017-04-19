import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';


class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: ""};
		this.handleLogin = this.handleLogin.bind(this);
    this.formWrapperRedirect = this.formWrapperRedirect.bind(this);
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

  // look more into difference between router.push and hashHistory.push

  formWrapperRedirect(e) {
    if($(e.target).attr('class') === 'form-wrapper'){
      this.props.router.push("/");
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
      <div className='form-wrapper' onClick={this.formWrapperRedirect}>
			<div className='auth-form'>
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
      </div>
		);
	}

}

export default withRouter(AuthForm);
