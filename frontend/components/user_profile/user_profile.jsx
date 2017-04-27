import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Latest from './latest';
import Following from './following';
import Recommended from './recommended';

import InteriorNavContainer from '../interior_nav/interior_nav_container';
import FollowUser from '../follow_user/follow_user';


class UserProfile extends React.Component {

  constructor(props){
    super(props);

    this.state = {currentFeed: 'latest', scrollTop: 0, scrollDir: 'down',}

    this.switchLatest = this.switchLatest.bind(this);
    this.switchRecommended = this.switchRecommended.bind(this);
    this.switchFollowing = this.switchFollowing.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.params.id);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.params.id != nextProps.params.id){
      this.props.fetchUser(this.props.params.id);
    }
  }

  switchLatest(){this.setState({currentFeed: 'latest'});}
  switchFollowing(){this.setState({currentFeed: 'following'});}
  switchRecommended(){this.setState({currentFeed: 'recommended'});}

  render(){

    let userData;

    let mixedLatest;
    let mixedByFollowed;
    let mixedLiked;

    let currentFeed;

    if(this.props.user){

      userData = (<div className='profile-userData'>
      {this.props.user.image_url}
      {this.props.user.name}
      {this.props.user.bio}
      {this.props.user.follower_ids}
      {this.props.user.following_ids}
      </div>);

      let userStoriesArr = this.props.user.stories;
      let userResponsesArr = this.props.user.responses;
      let userLatestArr = userStoriesArr.concat(userResponsesArr);
      mixedLatest = userLatestArr.sort((a, b) => { return a.created_at.localeCompare(b.created_at); });

      let storiesByFollowedArr = this.props.user.stories_by_followed_users;
      let responsesByFollowedArr = this.props.user.responses_by_followed_users;
      let byFollowedArr = storiesByFollowedArr.concat(responsesByFollowedArr);
      mixedByFollowed = byFollowedArr.sort((a, b) => { return a.created_at.localeCompare(b.created_at); });

      let likedStoriesArr = this.props.user.liked_stories;
      let likedResponsesArr = this.props.user.liked_responses;
      let likedArr = likedStoriesArr.concat(likedResponsesArr);
      mixedLiked = likedArr.sort((a, b) => { return a.created_at.localeCompare(b.created_at); });
    }

    if(this.state.currentFeed === 'latest'){
      currentFeed = (< Latest
        mixedItems={mixedLatest}
        currentUser={this.props.currentUser}
        loggedIn={this.props.loggedIn}
        destroyLike={this.props.destroyLike}
        createLike={this.props.createLike}
        responses={this.props.responses}
        key={1}/>);
    } else if(this.state.currentFeed === 'following'){
      currentFeed = (< Following
        mixedItems={mixedByFollowed}
        currentUser={this.props.currentUser}
        loggedIn={this.props.loggedIn}
        destroyLike={this.props.destroyLike}
        createLike={this.props.createLike}
        responses={this.props.responses}
        key={2}/>);
    } else {
      currentFeed = (< Recommended
        mixedItems={mixedLiked}
        currentUser={this.props.currentUser}
        loggedIn={this.props.loggedIn}
        destroyLike={this.props.destroyLike}
        createLike={this.props.createLike}
        responses={this.props.responses}
        key={3}/>);
    }


    //
    // componentDidMount() {
    //     this.props.fetchStory(this.props.params.id);
    //     this.props.fetchAllLikes({storyId: this.props.params.id});
    //     this.props.fetchAllResponses({storyId: this.props.params.id})
    //     .then(() => {
    //       this.setState({responsesLoaded: true})
    //     });
    //     this.setState({firstResponseInput: (
    //       <ResponseInputContainer storyId={this.props.params.id} key={0}/>)});
    //     window.addEventListener('scroll', this.handleScroll);
    //   }
    //
    // componentWillUnmount() {
    //   window.removeEventListener('scroll', this.handleScroll);
    // }

    // handleScroll(event) {
  	// 	const storyHeight = document.getElementById('mainBody').clientHeight;
  	// 	this.setState({storyHeight: storyHeight});
  	// 	// console.log(storyHeight);
    //
  	// 	if(($(document).scrollTop()) > this.state.scrollTop){
    //     this.setState({scrollDir: 'down'});
    //   } else {
    //     this.setState({scrollDir: 'up'});
    //   }
  	// 		if(($(document).scrollTop() > 140) && ($(document).scrollTop() < this.state.storyHeight - 300)){
  	// 			// console.log(this.state.storyHeight);
    //
  	// 			let storyId;
  	// 			let authorId;
  	// 			let likes = [];
  	// 			let likerIds = [];
    //
  	// 			if(this.props.story){
  	// 				storyId = this.props.story.id;
  	// 				authorId = this.props.story.author_id;
  	// 				likes = this.props.likes;
  	// 				if(this.props.likes){
    //
  	// 					Object.values(likes).forEach((like) => {
  	// 						// don't think I need the response_id thing anymore
  	// 						if(!like.response_id){
  	// 						likerIds.push(like.liker_id);
  	// 						}
  	// 					});
  	// 				}
  	// 			}
    //
  	// 			this.setState({sidebar:(<StorySidebar
  	// 				currentUser={this.props.currentUser}
  	// 				loggedIn={this.props.loggedIn}
  	// 				storyId={storyId}
  	// 				authorId={authorId}
  	// 				likerIds={likerIds}
  	// 				createLike={this.props.createLike}
  	// 				destroyLike={this.props.destroyLike}
  	// 				thisPath={this.props.location.pathname}/>)
  	// 		});
    //   } else {
  	// 		this.setState({sidebar: ''});
  	// 		this.props.fetchAllLikes({storyId: this.props.params.id});
    //
    //   }
    //   this.setState({scrollTop: $(document).scrollTop()});
    // }

    return(
      <div>
      {this.props.children}
  			< InteriorNavContainer scrollDir={this.state.scrollDir} scrollTop={this.state.scrollTop}/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <a onClick={this.switchLatest}>LATEST</a>
        <a onClick={this.switchFollowing}>FOLLOWING</a>
        <a onClick={this.switchRecommended}>RECOMMENDED</a>
        <br/><br/>
        {userData}
        <br/><br/>
        <CSSTransitionGroup
          transitionName="responseInputTrans"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}>
            {currentFeed}
        </CSSTransitionGroup>
      </div>
    );
  }

}

export default withRouter(UserProfile);


// <section className='storyInfo'>
//   <div className='authorPhotoContainer'>
//     <img src={ authorPhotoUrl } />
//   </div>
//   <div className='authorInfoContainer'>
//   <Link to={`/users/${authorId}`}>
//     { authorName }
//     </Link>
//     <br />
//     <span className='smallInfo'>
//       { authorBio }
//       <br />
//       { formattedDate }
//     </span>
//   </div>
//   <CSSTransitionGroup
//    transitionName="followAppear"
//    transitionAppear={true}
//    transitionAppearTimeout={1000}>
//     <FollowUser
//       loggedIn={this.props.loggedIn}
//       currentUser={this.props.currentUser}
//       authorFollowerIds={authorFollowerIds}
//       authorId={authorId}
//       createFollowing={this.props.createFollowing}
//       destroyFollowing={this.props.destroyFollowing}/>
//     </CSSTransitionGroup>
// </section>
//
// concat both arrays (stories and responses) into one array, then:
// c = a.sort(function (a, b) { return a.created_at.localeCompare(b.created_at); });
