import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter, hashHistory } from 'react-router';

class InputNav extends React.Component {
	constructor(props) {
		super(props);

    this.handleStoryInput = this.handleStoryInput.bind(this);
	}

  componentDidMount(){
  }

  componentWillReceiveProps(newProps){
  }

  handleStoryInput(e) {

    e.preventDefault();
    let formData = new FormData();
    let file = this.props.storyData.file;

    formData.append("story[author_id]", this.props.storyData.author_id);
    formData.append("story[title]", this.props.storyData.title);
    formData.append("story[description]", this.props.storyData.description);
    formData.append("story[body]", this.props.storyData.body);
    formData.append("story[date]", this.encodeDate());
    if(file){
      formData.append("story[main_image]", file);
    }

    if(this.props.storyData.id){
      formData.append("story[id]", this.props.storyData.id);
      this.props.updateStory(formData).then(hashHistory.push(`/stories/${this.props.storyData.id}`));;
    } else {
      this.props.createStory(formData).then(newStory => hashHistory.push(`/stories/${newStory.id}`));
    }
  }

    encodeDate(){
      let date = new Date();
      let month = (date.getMonth() + 1);
      let day = date.getDate();
      let year = date.getFullYear();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      return `${month},${day},${year},${hour},${minutes},${seconds}`;
    }


  render() {

    let imageUrl;

    if(this.props.currentUser){
      imageUrl = this.props.currentUser.image_url
    }

    let avatarBox = (<div className='add-margin avatar-container'>
      <img src={ imageUrl } />
    </div>);

    return(
      <div className='nav-outer-input'>
        <div className='input-nav'>
          <Link to='/'>
            <img src={ window.images.first_logo } height='40px' id='logo' />
          </Link>
          <div className='nav-right-input'>
            <div className='publish-link'>
            <form onSubmit={this.handleStoryInput}>
              <input type='submit' value='Publish' />
            </form>
            </div>
            { avatarBox }
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(InputNav);
// <a href="#">Publish</a>
