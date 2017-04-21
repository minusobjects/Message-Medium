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
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ]
  };

  let formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

    // this works! can probably save raw string to db and then parse
    // after the fact.
    var htmlToReactParser = new HtmlToReactParser();
    var reactElement = htmlToReactParser.parse('<div>' + this.state.body + '</div>');

    // You are: {this.props.currentUser.name}
    let date = new Date();
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
        </div>
      );
    }

}

export default withRouter(StoryInput);
