import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';


class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: ""};
		this.handleLogin = this.handleLogin.bind(this);
    this.formWrapperRedirect = this.formWrapperRedirect.bind(this);

		this.backPath = this.props.location.pathname.slice(0, -7);
	}

  componentDidMount() {
    this.redirectIfLoggedIn();
    this.props.receiveErrors([]);
    this.fade();
  }

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}
	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			hashHistory.push(this.backPath);
		}
	}

  fade() {
    $('#form-wrapper').animate({
    opacity: 1,}, 200);
  }

  // look more into difference between router.push and hashHistory.push

  formWrapperRedirect(e) {
    if($(e.target).attr('class') === 'form-wrapper'){
      this.props.router.push(this.backPath);
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
			<ul className='errors-list'>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render(){

		return (
      <div className='form-wrapper' id='form-wrapper' onClick={this.formWrapperRedirect}>
			<div className='auth-form'>
				<form onSubmit={this.handleLogin}>
					{this.renderErrors()}
						<br/>
            <img src={ window.images.first_logo } height='50px'/>
            <br />
            <div className='inner-auth'>
						<label> Username
              <br />
							<input type="text"
								value={this.state.username}
								onChange={this.updateField("username")}
								/>
						</label>
						<br/><br />
						<label> Password
              <br />
							<input type="password"
								value={this.state.password}
								onChange={this.updateField("password")}
								/>
						</label>
						<br/>
						<input type="submit" value="Sign in" />
            </div>
            <br /><br />
            <div className='small-message'>
            <Link to={`${this.backPath}/signup`}>Don't have an account? Sign up here.</Link>
            </div>
				</form>
        <br />
			</div>
      </div>
		);
	}

}

export default withRouter(AuthForm);
