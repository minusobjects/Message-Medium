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
                likeThis = (<div>'YOU CAN LIKE!!' <a onClick={this.handleLike}>LIKE IT!</a></div>);
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
