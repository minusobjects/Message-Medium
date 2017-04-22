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
    this.state = { title: "", body: "", description: "",
      date: "", imageUrl: "", imageFile: null };
    // author id will be based on current user
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.redirectIfNotLoggedIn();
    // this.props.receiveErrors([]);
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

    // had to manually escape a quote I think.
    let testStory = '\u003cp\u003eThis story will have \u003cstrong\u003eformatting!\u003c/strong\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003ch3\u003e\u003cstrong\u003eEveryone loves formatting!!\u003c/strong\u003e\u003c/h3\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cem\u003eDon\'t they???\u003c/em\u003e\u003c/p\u003e';
    let crossesFingers = htmlToReactParser.parse('<div>' + testStory + '</div>');

    // You are: {this.props.currentUser.name}
    let date = new Date();

    // $("button.ql-header[value='2']").html("H2!");
    $("button.ql-header[value='3']").html("Hi!");

    // will probably have to use the form data thingy since there's a file involved
    return(
      <div>
      < InteriorNavContainer />
        I am the story input!
        <br />
        <br />
        <br />
        <br />
        Today's date is: { date.toDateString() }
        <br />
        <br />
        <input type='text' value='title goes here' />
        <br />
        <br />
        <ReactQuill value={this.state.body} onChange={this.update} theme="bubble"
        modules={ modules }
        formats={ formats }
        className='test-class'/>
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
