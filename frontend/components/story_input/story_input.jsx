import ReactQuill, { Quill } from 'react-quill';
import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

import InputNavContainer from '../input_nav/input_nav_container';


class StoryInput extends React.Component {

  constructor(props){
    super(props);
    this.state = { title: "", description: "", body: "",
      date: "", imageUrl: "", imageFile: null };

    this.update = this.update.bind(this);
    this.loadImage = this.loadImage.bind(this);
  }

  componentDidMount() {
    this.redirectIfNotLoggedIn();
    // this.props.receiveErrors([]);

    // if editing story, import data
    if(this.props.params.id){
      this.props.fetchStory(this.props.params.id);
    }
  }

  componentDidUpdate() {
    this.redirectIfNotLoggedIn();
  }

  redirectIfNotLoggedIn() {

    if (!this.props.loggedIn) {
      hashHistory.push("/signin");
    }
  }

  componentWillReceiveProps(newProps){
    if(newProps.story){
      this.setState({
        title: newProps.story.title,
        description: newProps.story.description,
        body: newProps.story.body,
        date: newProps.story.date,
        imageUrl: newProps.story.main_image_url
      });
    }
    else {
      this.setState({ title: "", description: "", body: "",
        date: "", imageUrl: "", imageFile: null });
    }
  }

  update(a, b, c, d){
    this.setState({body: a});
  }

  updateField(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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


  render(){

    let modules = { toolbar: [
      // [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'link'],
      [{ 'header': 2 }, { 'header': 3 }],
      ['blockquote'],
    ],
  };

  let formats = [
    'header',
    'bold', 'italic', 'link', 'blockquote',
  ];

    let previewImage;
    if(this.state.imageUrl){
      previewImage = (<div className='inputPreviewImage'>
        <img src={this.state.imageUrl} />
        </div>)
    } else {
      // previewImage = window.images.story_default;
    }

    $("button.ql-header[value='3']").html('<svg viewBox="0 0 18 18"> <line class="ql-stroke" x1="3" y1="3" x2="3" y2="13"></line><line class="ql-stroke" x1="11" y1="3" x2="11" y2="13"></line><line class="ql-stroke" x1="11" y1="8" x2="3" y2="8"></line><path id="XMLID_28_" class="ql-stroke ql-thin" d="M13.3,9.9c0,0,0.2-1.5,1.5-0.6c1.1,0.8-0.5,1.9-0.5,1.9s0.9,0.8,1.1,1.2 c0.1,0.5-1.1,1.5-2.1,0.3"></path></svg>');


    let cameraStyle={backgroundImage: `url(${window.images.little_camera})`};


     let storyData = {};
     storyData.title = this.state.title;
     storyData.description = this.state.description;
     storyData.body = this.state.body;
     storyData.file = this.state.imageFile;
      if(this.props.params.id){
        storyData.id = this.props.params.id;
      }
      if(this.props.currentUser){
        storyData.author_id = this.props.currentUser.id;
      }

    return(
      <div>
        < InputNavContainer storyData={storyData} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='mainContainer'>
          <div className='inputContentContainer'>
            <div className='inputContent'>

                <div className='inputPadder'>
                  <div className='inputTitle'>
                    <input type="text"
                      placeholder="Title"
                      maxLength="80"
                      value={this.state.title}
                      onChange={this.updateField("title")} />
                  </div>
                  <br />
                  <div className='inputDescription'>
                    <input type="text"
                      placeholder="Description"
                      maxLength="110"
                      value={this.state.description}
                      onChange={this.updateField("description")} />
                  </div>
                </div>
                <br />
                <div className='inputElements'>
                  <div className='inputPhoto' style={cameraStyle}>
                    <label className='input-image-upload'>
                    TEXT
                    <input type="file"
                      onChange={this.loadImage}
                      className='hidden-input-upload' />
                    </label>
                  </div>
                    {previewImage}
                </div>
                <ReactQuill value={this.state.body} onChange={this.update} theme="bubble"
                  modules={ modules }
                  formats={ formats }
                  placeholder="Tell your story."
                  className='mainEditor'/>
                <br/><br/><br/>

            </div>
          </div>
        </div>
      </div>
);
}
}

export default withRouter(StoryInput);
