import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

class StorySidebar extends React.Component {

  constructor(props) {
		super(props);
    this.state = {likerIds: []};

    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
	}

  componentDidMount(){
    this.setState({likerIds: this.props.likerIds})
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.likerIds.length != this.props.likerIds.length){
      this.setState({likerIds: nextProps.likerIds})
    }
  }

  handleUnlike(e){
		e.preventDefault();
    let likerIdsArr = this.state.likerIds;
    let index = likerIdsArr.indexOf(this.props.currentUser.id);
    likerIdsArr.splice(index, 1);
    this.setState({likerIds: likerIdsArr});

		let unlikeData = {
			likerId: this.props.currentUser.id,
			storyId: this.props.storyId
		};
		this.props.destroyLike(unlikeData);
	}

  handleLike(e){
    e.preventDefault();
    let likerIdsArr = this.state.likerIds;
    likerIdsArr.push(this.props.currentUser.id);
    this.setState({likerIds: likerIdsArr});

    let likeData = {like:{
      liker_id: this.props.currentUser.id,
      story_id: this.props.storyId
      }
    };
    this.props.createLike(likeData);
  }


    render(){
      let likeThis;

      if(this.props.loggedIn){
          if(this.state.likerIds.includes(this.props.currentUser.id)){
            likeThis = (<div><a onClick={this.handleUnlike}><div className='likeHeartDiv'>
                <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 18 18">
                <path className="likeHeart-canUnlike" d="M9,17.4C6.2,15-2.6,6.7,2.2,2.1C6.1-1.6,8.6,2.6,9,3.3l0,0l0,0c0.4-0.7,2.8-4.9,6.7-1.1 C20.6,6.7,11.8,15,9,17.4L9,17.4z"/>
                </svg>
                </div></a></div>);
          } else {
            likeThis = (<div><a onClick={this.handleLike}><div className='likeHeartDiv'>
                <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 18 18">
                <path className="likeHeart-canLike" d="M9,17.4C6.2,15-2.6,6.7,2.2,2.1C6.1-1.6,8.6,2.6,9,3.3l0,0l0,0c0.4-0.7,2.8-4.9,6.7-1.1 C20.6,6.7,11.8,15,9,17.4L9,17.4z"/>
                </svg>
                </div>
                </a>
              </div>);
          }
        } else {
          likeThis = (<div><a onClick={this.handleLike}><div className='likeHeartDiv'>
              <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 18 18">
              <path className="likeHeart-static" d="M9,17.4C6.2,15-2.6,6.7,2.2,2.1C6.1-1.6,8.6,2.6,9,3.3l0,0l0,0c0.4-0.7,2.8-4.9,6.7-1.1 C20.6,6.7,11.8,15,9,17.4L9,17.4z"/>
              </svg>
              </div>
              </a>
            </div>);
        }


      return(
        <div className='storySidebar'>
          {likeThis}
          <div className='likeNumber'>
            {this.state.likerIds.length}
          </div>
        </div>
      )
    }

}

export default StorySidebar;
