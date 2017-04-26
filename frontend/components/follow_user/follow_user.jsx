import React from 'react';
// import { Link, hashHistory } from 'react-router';

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
          followThis = (<div>'YOU CANNOT FOLLOW YOURSELF!'</div>);
          } else {
              if(this.state.authorFollowerIds.includes(this.props.currentUser.id)){
                followThis = (<div>'YOU HAVE ALREADY FOLLOWED!! <a onClick={this.handleUnfollow}>Unfollow!'</a></div>);
              } else {
                followThis = (<div>'YOU CAN FOLLOW!!' <a onClick={this.handleFollow}><div className='st0div'>
                    <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 18 18">
                    <path className="st0" d="M9,17.4C6.2,15-2.6,6.7,2.2,2.1C6.1-1.6,8.6,2.6,9,3.3l0,0l0,0c0.4-0.7,2.8-4.9,6.7-1.1 C20.6,6.7,11.8,15,9,17.4L9,17.4z"/>
                    </svg>
                    </div>
                    </a>
                  </div>);
              }
            }
        }

      return(
        <div>
          <br />
          Can you follow? {followThis}
        </div>
      )
    }
}

export default FollowUser;
