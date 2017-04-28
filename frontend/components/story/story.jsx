import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter, hashHistory } from 'react-router';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
// import ScrollableAnchor from 'react-scrollable-anchor';

import ResponseInputContainer from '../response_input/response_input_container';
import ResponseSectionContainer from '../response_section/response_section_container';
import InteriorNavContainer from '../interior_nav/interior_nav_container';
import StorySidebar from '../story_sidebar/story_sidebar';
import FollowUser from '../follow_user/follow_user';
import LoadingIcon from '../loading_icon/loading_icon';

var HtmlToReactParser = require('html-to-react').Parser;

class Story extends React.Component {
	constructor(props) {
		super(props);

		this.state = {scrollTop: 0,
			scrollDir: 'down',
			firstResponseInput:'',
			responsesLoaded: false,
			sidebar: '',
			storyHeight: 0};

    this.handleScroll = this.handleScroll.bind(this);
    this.handleLike = this.handleLike.bind(this);
	}

  componentDidMount() {
      this.props.fetchStory(this.props.params.id);
			this.props.fetchAllLikes({storyId: this.props.params.id});
      this.props.fetchAllResponses({storyId: this.props.params.id})
			.then(() => {
				this.setState({responsesLoaded: true})
			});
			this.setState({firstResponseInput: (
				<ResponseInputContainer storyId={this.props.params.id} key={0}/>)});
			window.addEventListener('scroll', this.handleScroll);
    }

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

  componentWillReceiveProps(nextProps) {
		// this.props.fetchAllLikes({storyId: this.props.params.id});

		if(nextProps.params.id != this.props.params.id){
    	this.props.fetchStory(nextProps.params.id);
			this.props.fetchAllResponses({storyId: nextProps.params.id})
			.then(() => {
				this.setState({responsesLoaded: true})
			});
		} else if(
			this.state.responsesLoaded &&
			this.props.responses.length < nextProps.responses.length &&
			!nextProps.responses[nextProps.responses.length-1].in_response_id){
				this.setState({firstResponseInput: ''})}
  }

	handleScroll(event) {
		const storyHeight = document.getElementById('mainBody').clientHeight;
		this.setState({storyHeight: storyHeight});
		// console.log(storyHeight);

		if(($(document).scrollTop()) > this.state.scrollTop){
      this.setState({scrollDir: 'down'});
    } else {
      this.setState({scrollDir: 'up'});
    }
			if(($(document).scrollTop() > 140) && ($(document).scrollTop() < this.state.storyHeight - 300)){
				// console.log(this.state.storyHeight);

				let storyId;
				let authorId;
				let likes = [];
				let likerIds = [];

				if(this.props.story){
					storyId = this.props.story.id;
					authorId = this.props.story.author_id;
					likes = this.props.likes;
					if(this.props.likes){

						Object.values(likes).forEach((like) => {
							// don't think I need the response_id thing anymore
							if(!like.response_id){
							likerIds.push(like.liker_id);
							}
						});
					}
				}

				this.setState({sidebar:(<StorySidebar
					currentUser={this.props.currentUser}
					loggedIn={this.props.loggedIn}
					storyId={storyId}
					authorId={authorId}
					likerIds={likerIds}
					createLike={this.props.createLike}
					destroyLike={this.props.destroyLike}
					thisPath={this.props.location.pathname}/>)
			});
    } else {
			this.setState({sidebar: ''});
			this.props.fetchAllLikes({storyId: this.props.params.id});

    }
    this.setState({scrollTop: $(document).scrollTop()});
  }

	handleLike(e){
		e.preventDefault();
		let likeData = {like:{
			liker_id: this.props.currentUser.id,
			story_id: this.props.story.id
			}
		};
		this.props.createLike(likeData);
	}

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

		if(this.props.loading){
			return(<LoadingIcon />);
		}

    // way to destructure?

		let storyId;
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
		// let likers = [];
		let likes = [];
		let likerIds = [];
		let authorFollowerIds;
		let topicName;
		let topicId;

    if(this.props.story){
			storyId = this.props.story.id;
      mainImageUrl = this.props.story.main_image_url;
      title = this.props.story.title;
      authorName = this.props.story.author_name;
			authorBio = this.props.story.author_bio;
			authorId = this.props.story.author_id;
			authorPhotoUrl = this.props.story.author_photo_url;
			authorFollowerIds = this.props.story.author_follower_ids;
      date = this.props.story.date;
      formattedDate = this.formatDate(date.split(','));
      description = this.props.story.description;
      body = this.props.story.body;
			// likers = this.props.story.likers;
			likes = this.props.story.likes;
			if(this.props.story.likes){
				likes.forEach((like) => {
					if(!like.response_id){
					likerIds.push(like.liker_id);
					}
				})
			}
			if(this.props.story.topic){
				topicName = this.props.story.topic.name;
				topicId = this.props.story.topic.id;
			}
    }

		// this thingy here both checks whether the user can edit the story
		// and whether they can leave a comment.
		let editThis;
		let respondHere;

		if(this.props.loggedIn){

			if(this.props.currentUser.id === authorId){
				editThis = (<div className='editThis'>
						This is your story. &nbsp;
						<Link to={`/stories/${this.props.story.id}/edit`}>
							Edit?
						</Link>
					</div>);
				}
			respondHere = (
				<CSSTransitionGroup
          transitionName="responseInputTrans"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}>
						{this.state.firstResponseInput}
				 	</CSSTransitionGroup>
			);
		} else {
				respondHere = (<div className='signUpLink'>
				<Link to={`${this.props.location.pathname}/signin`}>Sign in to leave a response.</Link>
				</div>);
			}

    var htmlToReactParser = new HtmlToReactParser();
    var parseBody = htmlToReactParser.parse('<div>' + body + '</div>');

    return(
		<div>
		{this.props.children}
			< InteriorNavContainer scrollDir={this.state.scrollDir} scrollTop={this.state.scrollTop}/>
			<br />
			<br />
			<br />
			<br />
			<br />
      <div className='mainContainer'>
				<div className='storyContentContainer'>
					<article id='mainBody' className='storyContent'>
					<CSSTransitionGroup
	          transitionName="sidebarTrans"
	          transitionEnterTimeout={100}
	          transitionLeaveTimeout={100}>
							{this.state.sidebar}
							</CSSTransitionGroup>
		        <section className='storyInfo'>
							<div className='authorPhotoContainer'>
								<img src={ authorPhotoUrl } />
							</div>
							<div className='authorInfoContainer'>
							<Link to={`/users/${authorId}`}>
								{ authorName }
								</Link>
								<br />
								<span className='smallInfo'>
									{ authorBio }
									<br />
									<span className='dateInfo'>{ formattedDate }</span>
								</span>
							</div>
							<CSSTransitionGroup
							 transitionName="followAppear"
							 transitionAppear={true}
							 transitionAppearTimeout={1000}>
								<FollowUser
									loggedIn={this.props.loggedIn}
									currentUser={this.props.currentUser}
									authorFollowerIds={authorFollowerIds}
									authorId={authorId}
									createFollowing={this.props.createFollowing}
									destroyFollowing={this.props.destroyFollowing}/>
								</CSSTransitionGroup>
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
							<div className='storyTopic'>
								Filed Under: <Link to={`/topics/${topicId}`}>{topicName}</Link>
							</div>
							<hr />
		        </section>

					</article>
				</div>
				<section className='bottomSection'>
					<div className='responseBox'>
					{respondHere}
					</div>
					<div className='responseList'>
						< ResponseSectionContainer storyId={this.props.params.id} responses={this.props.responses} />
					</div>
				</section>

      </div>
			<div className='bottom'>
			  <img src={ window.images.first_logo } height='20px'/>
			</div>
		</div>
    );
  }

}

export default withRouter(Story);
