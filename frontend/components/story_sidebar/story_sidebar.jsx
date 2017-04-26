import React from 'react';
// import { Link, hashHistory } from 'react-router';

class StorySidebar extends React.Component {

  constructor(props) {
		super(props);
    this.state = {likerIds: []};
    // will need scrolling stuff eventully
    // this.handleScroll = this.handleScroll.bind(this);

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

//   shouldComponentUpdate: function(nextProps, nextState) {
//   // You can access `this.props` and `this.state` here
//   // This function should return a boolean, whether the component should re-render.
//   return false;
// },

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
        if(this.props.currentUser.id === this.props.authorId){
          likeThis = (<div>'YOU CANNOT LIKE YOUR OWN STORY!!'</div>);
          } else {
              if(this.state.likerIds.includes(this.props.currentUser.id)){
                likeThis = (<div>'YOU HAVE ALREADY LIKED!! <a onClick={this.handleUnlike}>Unlike!'</a></div>);
              } else {
                likeThis = (<div>'YOU CAN LIKE!!' <a onClick={this.handleLike}><div className='st0div'>
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
          LIKES: {this.state.likerIds.length}
          <br />
          Can you like? {likeThis}
        </div>
      )
    }

}

export default StorySidebar;
