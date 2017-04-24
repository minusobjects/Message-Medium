import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter, hashHistory } from 'react-router';

import ResponseInputContainer from '../response_input/response_input_container';
import ResponseSectionContainer from '../response_section/response_section_container';

var HtmlToReactParser = require('html-to-react').Parser;

class Story extends React.Component {
	constructor(props) {
		super(props);
	}

  componentDidMount() {
      this.props.fetchStory(this.props.params.id);
      this.props.fetchAllResponses({storyId: this.props.params.id});
    }

  componentWillReceiveProps(nextProps) {
		// debugger
		if(nextProps.params.id != this.props.params.id){
    	this.props.fetchStory(nextProps.params.id);
			this.props.fetchAllResponses({storyId: nextProps.params.id});
		}
  }

// Not adding seconds in the string.
// [4,18,2017,10,41,20]

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
    let authorBio;
		let authorId;
    let authorPhotoUrl;
    let date;
    let formattedDate;
    let description;
    let body;

    if(this.props.story){
      mainImageUrl = this.props.story.main_image_url;
      title = this.props.story.title;
      authorName = this.props.story.author_name;
			authorBio = this.props.story.author_bio;
			authorId = this.props.story.author_id;
			authorPhotoUrl = this.props.story.author_photo_url;
      date = this.props.story.date;
      formattedDate = this.formatDate(date.split(','));
      description = this.props.story.description;
      body = this.props.story.body;
    }

		let editThis;

		if(this.props.loggedIn){
			if(this.props.currentUser.id === authorId){
				editThis = (<div className='editThis'>
					This is your story. &nbsp;
					<Link to={`/stories/${this.props.story.id}/edit`}>
					Edit?
					</Link>
				</div>);
			}
		}

    var htmlToReactParser = new HtmlToReactParser();
    var parseBody = htmlToReactParser.parse('<div>' + body + '</div>');

    return(
      <div className='mainContainer'>
				<div className='storyContentContainer'>
					<article className='storyContent'>

		        <section className='storyInfo'>
							<div className='authorPhotoContainer'>
								<img src={ authorPhotoUrl } />
							</div>
							<div className='authorInfoContainer'>
								{ authorName }
								<br />
								<span className='smallInfo'>
									{ authorBio }
									<br />
									{ formattedDate }
								</span>
							</div>
						</section>
						{ editThis }
						<section className='storyHead'>
							<div className='storyTitle'>
								<h1>
				        	{ title }
								</h1>
							</div>
							<div className='storyDescription'>
								<h3>
				        	{ description }
								</h3>
							</div>
							<div className='storyMainImageContainer'>
			        	<img src={ mainImageUrl } />
							</div>
						</section>
						<section className='storyBody'>
		        	{ parseBody }
							<hr />
		        </section>

						<div>
		        < ResponseInputContainer storyId={this.props.params.id}/>
		        <br /><br />
		        < ResponseSectionContainer storyId={this.props.params.id} responses={this.props.responses} />
		        <br /><br />
						</div>

						</article>
				</div>
      </div>
    );
  }

}

export default withRouter(Story);
