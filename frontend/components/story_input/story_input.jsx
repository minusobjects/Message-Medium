import ReactQuill, { Quill } from 'react-quill';
import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

import InteriorNavContainer from '../interior_nav/interior_nav_container';

var HtmlToReactParser = require('html-to-react').Parser;


//   id                      :integer          not null, primary key
// #  author_id               :integer          not null
// #  title                   :string           not null
// #  description             :text
// #  body                    :text             not null
// #  date                    :string
// #  topic_id                :integer
// #  created_at              :datetime         not null
// #  updated_at              :datetime         not null
// #  main_image_file_name    :string
// #  main_image_content_type :string
// #  main_image_file_size    :integer
// #  main_image_updated_at   :datetime

class StoryInput extends React.Component {

  constructor(props){
    super(props);
    this.state = { title: "", description: "", body: "",
      date: "", imageUrl: "", imageFile: null };
    // author id will be based on current user
    // also not really using 'date' in here yet.

    this.update = this.update.bind(this);
    this.handleStoryInput = this.handleStoryInput.bind(this);
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
  }

	componentDidUpdate() {
		this.redirectIfNotLoggedIn();
	}
	redirectIfNotLoggedIn() {
		if (!this.props.loggedIn) {
			hashHistory.push("/signin");
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

// params.require(:story).permit(:author_id, :title, :description, :body, :date, :topic_id, :main_image)

  handleStoryInput(e) {
    e.preventDefault();
    let formData = new FormData();
    let file = this.state.imageFile;

    formData.append("story[author_id]", this.props.currentUser.id); // current user id!
    formData.append("story[title]", this.state.title);
    formData.append("story[description]", this.state.description);
    formData.append("story[body]", this.state.body);
    formData.append("story[date]", this.encodeDate()); // custom date formatting
    if(file){
      formData.append("story[main_image]", file);
    }

    // account for patch or post!
    // what happens if I 'patch' without entering a new image file?

    if(this.props.params.id){
      formData.append("story[id]", this.props.params.id);
      this.props.updateStory(formData);
    } else {
      this.props.createStory(formData);
    }

    // SHOULD BE A PROMISE
    // SHOULD GO TO SHOW PAGE
    // hashHistory.push("/");
  }

  // [4,18,2017,10,41,1]
  // Today's date is: { date.toDateString() }

  // let date = new Date();

  // a.getDate()
  // a.getFullYear()
  // a.getMonth() (add 1)
  // a.getHours() (0-24)
  // a.getMinutes()

  encodeDate(){
    let date = new Date();
    let month = (date.getMonth() + 1);
    let day = date.getDate();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return `${month},${day},${year},${hour},${minutes}`;
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

    // this works! can probably save raw string to db and then parse
    // after the fact.
    var htmlToReactParser = new HtmlToReactParser();
    var reactElement = htmlToReactParser.parse('<div>' + this.state.body + '</div>');

    // had to manually escape a quote I think. Or not...
    let testStory = '\u003cp\u003eThis story will have \u003cstrong\u003eformatting!\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003ch3\u003e\u003cstrong\u003eEveryone loves formatting!!\u003c/strong\u003e\u003c/h3\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cem\u003eDon\'t they???\u003c/em\u003e\u003c/p\u003e';
    let crossesFingers = htmlToReactParser.parse('<div>' + testStory + '</div>');

    // $("button.ql-header[value='2']").html("H2!");
    $("button.ql-header[value='3']").html("Hi!");


    let previewImage;
    if(this.state.imageUrl){
      previewImage = this.state.imageUrl;
    } else {
      previewImage = window.images.story_default;
    }

    // will probably have to use the form data thingy since there's a file involved
    return(
      <div>
      < InteriorNavContainer />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        I am the story input!
        <br />
        <br />
        <br />
        <form onSubmit={this.handleStoryInput}>
        <label> Title
          <input type="text"
            value={this.state.title}
            onChange={this.updateField("title")}
            />
        </label>
        <br />
        <br />
        <label> Description
          <input type="text"
            value={this.state.description}
            onChange={this.updateField("description")}
            />
        </label>
        <br />
        <br />
        <ReactQuill value={this.state.body} onChange={this.update} theme="bubble"
        modules={ modules }
        formats={ formats }
        className='test-class'/>
        <br />
        <br />
        <div className='signup-avatar-container'>
          <img src={previewImage} />
        </div>
        <label> Photo (optional)
          <br />
          <span className='image-upload'>
            Choose a file
          </span>
          <input type="file"
            onChange={this.loadImage}
            className='hidden-upload'
            />
        </label>
        <br/>
        account for patch or post??
        <input type='submit' value='Submit story!' />
        </form>
        <br />
        <br />
          <div>
            { reactElement }
          </div>
        <br /><br /><br /><br />
        <div>
          { this.state.body }
        </div>
        <br /><br /><br /><br />
          { crossesFingers }
        <br /><br />
        </div>
      );
    }

}

export default withRouter(StoryInput);
