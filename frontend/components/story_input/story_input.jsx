import ReactQuill, { Quill } from 'react-quill';
import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

var HtmlToReactParser = require('html-to-react').Parser;

class StoryInput extends React.Component {

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

    // this works! can probably save raw string to db and then parse
    // after the fact.
    var htmlToReactParser = new HtmlToReactParser();
    var reactElement = htmlToReactParser.parse('<div>' + this.state.body + '</div>');

    // You are: {this.props.currentUser.name}
    let date = new Date();
    return(
      <div>
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
        <ReactQuill value={this.state.body} onChange={this.update} theme="bubble" className='test-class'/>
        <br />
        <br />
          <div>
            { reactElement }
          </div>
      </div>
    );
  }


}

export default withRouter(StoryInput);


// let testState = {text: (<div><p>This is a story, there will be all sorts of weird <strong>formatting</strong> things happening.</p><h2>Like headers!</h2><p>And other stuff, like <em>italics!</em></p><blockquote><em>Oh and don't forget blockquotes! We love blockquotes!</em></blockquote><p>Yeah text is cool.</p></div>)};

// <div dangerouslySetInnerHTML={{ __html: this.state.text }} />

// { testState.text }

// let s = this.state.text;
// let htmlObject = document.createElement('div');
// htmlObject.innerHTML = s;
// let objectTwo = htmlObject.firstChild;
// console.log(htmlObject);
// console.log(objectTwo);

// let divTest = ('<div>' + this.state.text + '</div>');
