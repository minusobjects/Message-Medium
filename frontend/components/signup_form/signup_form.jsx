import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';


class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "",
    email: "", name: "", bio: "", photo_url: "",
    imageUrl: "", imageFile: null };
		this.handleSignup = this.handleSignup.bind(this);
    this.formWrapperRedirect = this.formWrapperRedirect.bind(this);
    this.loadImage = this.loadImage.bind(this);
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
      hashHistory.push("/");
    }
  }

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

  // old version - didn't have to account for images
  // handleSignup(e) {
  //   e.preventDefault();
  //   const user = this.state;
  //   this.props.signup({user});
  // }

  handleSignup(e) {
    e.preventDefault();
    var formData = new FormData();
    var file = this.state.imageFile;
    formData.append("user[username]", this.state.username);
    formData.append("user[password]", this.state.password);
    formData.append("user[name]", this.state.name);
    formData.append("user[email]", this.state.email);
    formData.append("user[bio]", this.state.bio);
    formData.append("user[photo]", file);
    this.props.signup(formData);
  }

  loadImage(e){
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    reader.onloadend = function() {
      this.setState({ imageUrl: reader.result, imageFile: file});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
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
      <div className='form-wrapper' onClick={this.formWrapperRedirect}>
			<div className='signup-form'>
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
          <img src={this.state.imageUrl} width="50px" />
          <img src='' width="50px" />
          <label> Photo:
            <input type="file"
              onChange={this.loadImage}
              />
          </label>
          <br/>
          <br/>
          <input type="submit" value="Submit new user!" />
        </form>
			</div>
    </div>
		);
	}

}

export default withRouter(SignupForm);
