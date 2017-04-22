import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter, hashHistory } from 'react-router';

var HtmlToReactParser = require('html-to-react').Parser;

class Story extends React.Component {
	constructor(props) {
		super(props);
	}

  componentDidMount() {
      this.props.fetchStory(this.props.params.id);
    }

// [4,18,2017,10,41,1]
// ACTUALLY would be better to just have hours and minutes, get ampm from there!
  formatDate(dateArr){
    let ampm;
    let hour;
    if(dateArr[3] > 12){
      ampm = 'pm';
      hour = (dateArr[3] - 12);
    } else {
      ampm = 'am';
      hour = dateArr[3];
    }
    const months = ['none','Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.'];
    let str = `${months[dateArr[0]]} ${dateArr[1]}, ${dateArr[2]}. ${hour}:${dateArr[4]} ${ampm}`;
    return str;
  }


  render() {

    // way to destructure?

    let mainImageUrl;
    let title;
    let authorName;
    let date;
    let formattedDate;
    let description;
    let body;

    if(this.props.story){
      mainImageUrl = this.props.story.main_image_url;
      title = this.props.story.title;
      authorName = this.props.story.author_name;
      date = this.props.story.date;
      formattedDate = this.formatDate(date.split(','));
      description = this.props.story.description;
      body = this.props.story.body;
    }

    var htmlToReactParser = new HtmlToReactParser();
    var parseBody = htmlToReactParser.parse('<div>' + body + '</div>');

    return(
      <div >
        Story goes here.
        <br /><br />
        <img src={ mainImageUrl } />
        <br /><br />
        { title }
        <br /><br />
        { authorName }
        <br /><br />
        { date }
        <br /><br />
        { formattedDate }
        <br /><br />
        { description }
        <br /><br />
        { body }
        <br /><br />
        { parseBody }
      </div>
    );
  }

}

export default withRouter(Story);


// componentDidMount() {
//     this.props.fetchPost(this.props.params.postId);
//   }
//
//   componentWillReceiveProps(nextProps) {
//     this.props.fetchPost(nextProps.params.postId);
//   }
