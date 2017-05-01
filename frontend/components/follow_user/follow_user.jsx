import React from 'react';

class FollowUser extends React.Component {

  constructor(props) {
		super(props);
    this.state = {isFollowedByCurrentUser: false,
      authorFollowerIds: this.props.authorFollowerIds};

    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
	}

  componentDidMount(){
    if(this.props.loggedIn && this.props.authorFollowerIds){
      if(this.props.authorFollowerIds.includes(this.props.currentUser.id)){
        this.setState({isFollowedByCurrentUser: true});
      }
    }
    this.setState({authorFollowerIds: this.props.authorFollowerIds});
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.loggedIn && this.props.authorFollowerIds){
      if(nextProps.authorFollowerIds.includes(this.props.currentUser.id)){
        this.setState({isFollowedByCurrentUser: true});
      }
    }
    this.setState({authorFollowerIds: this.props.authorFollowerIds});
  }


  handleUnfollow(e){
		e.preventDefault();
    let authorFollowerIdsArr = this.state.authorFollowerIds;
    let index = authorFollowerIdsArr.indexOf(this.props.currentUser.id);
    authorFollowerIdsArr.splice(index, 1);
    this.setState({isFollowedByCurrentUser: false,
      authorFollowerIds: authorFollowerIdsArr});

		let unfollowData = {
      followerId: this.props.currentUser.id,
      followingId: this.props.authorId
		};
		this.props.destroyFollowing(unfollowData);
	}

  handleFollow(e){
    e.preventDefault();
    let authorFollowerIdsArr = this.state.authorFollowerIds;
    authorFollowerIdsArr.push(this.props.currentUser.id);
    this.setState({isFollowedByCurrentUser: true,
      authorFollowerIds: authorFollowerIdsArr});

    let followData = {following:{
      follower_id: this.props.currentUser.id,
      following_id: this.props.authorId
      }
    };
    this.props.createFollowing(followData);
  }

    render(){
      let followThis;
      if(this.props.loggedIn && this.state.authorFollowerIds){
        if(this.props.currentUser.id === this.props.authorId){
          followThis = (<div></div>);
          } else {
              if(this.state.authorFollowerIds.includes(this.props.currentUser.id)){
                followThis = (<div className='followButton-unfollow'><a onClick={this.handleUnfollow}>UNFOLLOW</a></div>);
              } else {
                followThis = (<div className='followButton-follow'><a onClick={this.handleFollow}>FOLLOW</a></div>);
              }
            }
        }

      return(
        <div className='followButtonContainer'>
          {followThis}
        </div>
      )
    }
}

export default FollowUser;
