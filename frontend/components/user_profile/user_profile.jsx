import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';


class UserProfile extends React.Component {

  constructor(props){
    super(props);

    this.state = {storiesByUser: '', responsesByUser: '',
      storiesLikedByUser: '', responsesLikedByUser: '',
      storiesByFollowed: '', responsesByFollowed: ''}
  }

  componentDidMount(){
    this.props.fetchUser(this.props.params.id);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.params.id != nextProps.params.id){
      this.props.fetchUser(this.props.params.id);
    }
  }

  render(){

    let userData;

    if(this.props.user){

        // this.props.user.image_url
        // this.props.user.name
        // this.props.user.bio
        // this.props.user.follower_ids
        // this.props.user.following_ids

        let userStoriesArr = this.props.user.stories;
        let userResponsesArr = this.props.user.responses;
        let userLatestArr = userStoriesArr.concat(userResponsesArr);
        userLatestArr = userLatestArr.sort((a, b) => { return a.created_at.localeCompare(b.created_at); });
        //
        let storiesByFollowedArr = this.props.user.stories_by_followed_users;
        let responsesByFollowedArr = this.props.user.responses_by_followed_users;
        let byFollowedArr = storiesByFollowedArr.concat(responsesByFollowedArr);
        byFollowedArr = byFollowedArr.sort((a, b) => { return a.created_at.localeCompare(b.created_at); });
        //
        let likedStoriesArr = this.props.user.liked_stories;
        let likedResponsesArr = this.props.user.liked_responses;
        let likedArr = likedStoriesArr.concat(likedResponsesArr);
        likedArr = likedArr.sort((a, b) => { return a.created_at.localeCompare(b.created_at); });

                debugger
    }

    // debugger
    return(
      <div>
        hi
        <br/><br/>
        {userData}
      </div>
    );
  }

}

export default withRouter(UserProfile);

// concat both arrays (stories and responses) into one array, then:
// c = a.sort(function (a, b) { return a.created_at.localeCompare(b.created_at); });
