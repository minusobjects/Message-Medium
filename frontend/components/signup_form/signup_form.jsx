import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';


class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "",
    email: "", name: "", bio: "", photo_url: "",
    imageUrl: "", imageFile: null };
    // photo_url is deprecated
		this.handleSignup = this.handleSignup.bind(this);
    this.formWrapperRedirect = this.formWrapperRedirect.bind(this);
    this.loadImage = this.loadImage.bind(this);
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
      hashHistory.push("/");
    }
  }

  fade() {
    $('#form-wrapper').animate({
    opacity: 1,}, 200);
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
    let formData = new FormData();
    let file = this.state.imageFile;

    formData.append("user[username]", this.state.username);
    formData.append("user[password]", this.state.password);
    formData.append("user[name]", this.state.name);
    formData.append("user[email]", this.state.email);
    formData.append("user[bio]", this.state.bio);
    if(file){
      formData.append("user[photo]", file);
    }
    this.props.signup(formData);
  }

  loadImage(e){
    e.preventDefault();
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
			<ul className='errors-list'>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
    let previewImage;
    if(this.state.imageUrl){
      previewImage = this.state.imageUrl;
    } else {
      previewImage = window.images.missing;
    }
		return (
      <div className='form-wrapper' id='form-wrapper' onClick={this.formWrapperRedirect}>
			<div className='signup-form'>
        <form onSubmit={this.handleSignup}>
					{this.renderErrors()}
          <br />
          <img src={ window.images.bad_logo } height='50px'/>
          <br />
          <div className='inner-signup'>
          <label> Username
            <input type="text"
							maxLength="40"
              value={this.state.username}
              onChange={this.updateField("username")}
              />
          </label>
          <br/>
          <label> Password
            <input type="password"
							maxLength="40"
              value={this.state.password}
              onChange={this.updateField("password")}
              />
          </label>
          <br/>
            <label> Name
              <input type="text"
								maxLength="60"
                value={this.state.name}
                onChange={this.updateField("name")}
                />
            </label>
            <br/>
          <label> Email
            <input type="text"
							maxLength="60"
              value={this.state.email}
              onChange={this.updateField("email")}
              />
          </label>
          <br/>
          <label> Bio (optional)
            <input type="text"
							maxLength="150"
              value={this.state.bio}
              onChange={this.updateField("bio")}
              />
          </label>
          <br/>
          <div className='signup-avatar-container'>
            <img src={previewImage} />
          </div>
          <label> Photo (optional)
            <br />
            <label className='image-upload'>
              Choose a file
            <input type="file"
              onChange={this.loadImage}
              className='hidden-upload'/>
						</label>
          </label>
          <br/>
          <input type="submit" value="Create a new account" />
          </div>
        </form>
        <br />
        <div className='small-message'>
          <Link to='/signin'>Already have an account? Sign in here.</Link>
        </div>
        <br />
			</div>
    </div>
		);
	}

}

export default withRouter(SignupForm);
