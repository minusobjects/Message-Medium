import React from 'react';
import { Link, hashHistory } from 'react-router';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


import ResponseInputContainer from '../response_input/response_input_container';

class Response extends React.Component {

  constructor(props){
    super(props);

    this.state = {floatingInput: '', likerIds: []};
    this.loadResponseInput = this.loadResponseInput.bind(this);
    this.responseKeys = 0;

    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
  }

  componentDidMount(){
    let likerIds = [];
    let likes = this.props.response.likes;
    if(this.props.response.likes){
      likes.forEach((like) => {
        likerIds.push(like.liker_id);
      })
    }
    this.setState({likerIds: likerIds});
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.response != this.props.response){
      this.setState({floatingInput: ''});
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
			responseId: this.props.response.id
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
      story_id: this.props.storyId,
      response_id: this.props.response.id
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

  loadResponseInput(e){

    let thisResponse;
    let inResponseId;

    if(this.props.loggedIn){
      if(this.props.currentUser.id === this.props.response.writer_id){
        thisResponse = this.props.response;
      } else {
        inResponseId= this.props.response.id;
      }
    }

    this.responseKeys = this.responseKeys + 1;

    this.setState({floatingInput: (
          <ResponseInputContainer
            key={this.responseKeys}
            storyId={this.props.response.story_id}
            inResponseId={inResponseId}
            makeVisible={true}
            thisResponse = {thisResponse}/>
          )
        });
    }



  render(){

    let likeThis;
    // debugger
    if(this.props.loggedIn){
      if(this.props.currentUser.id === this.props.response.writer_id){
        likeThis = (<div>'YOU CANNOT LIKE YOUR OWN RESPONSE!!'</div>);
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


    let styleType;

    if(this.props.isChild){
      styleType = 'responseBox responseChild';
    } else {
      styleType = 'responseBox';
    }

    let responseOptions;

    if(this.props.loggedIn){
      if((this.props.currentUser.id) === (this.props.response.writer_id)){
        responseOptions = (
          <a onClick={this.loadResponseInput}>Edit this response</a>
        );
      } else if(!this.props.isChild){
        responseOptions = (
          <a onClick={this.loadResponseInput}>Respond to this</a>
        );
      }
    }


    return (
      <li className={styleType}>
      <section className='storyInfo'>
        <div className='authorPhotoContainer smallerPhoto'>
          <img src={ this.props.response.writer_photo_url } />
        </div>
        <div className='authorInfoContainer'>
          { this.props.response.writer_name }
          <br />
          <span className='smallInfo'>
          {this.formatDate(this.props.response.date.split(','))}
          </span>
        </div>
      </section>
        <div className='responseBody'>
          { this.props.response.body }
        </div>
        <div className='responseOptionsWrapper'>
          {responseOptions}
        </div>
        <CSSTransitionGroup
          transitionName="responseInputTrans"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}>
            {this.state.floatingInput}
          </CSSTransitionGroup>
          <div>
            LIKES: {this.state.likerIds.length}
            <br />
            Can you like? {likeThis}
          </div>
      </li>
    );
  }

}

export default Response;

// transitionAppear={true}
// transitionAppearTimeout={3000}

// <br />
// For EDITING this one:
// < ResponseInputContainer storyId={this.props.storyId} thisResponse={this.props.response} this_id={this.props.response.id} />
// <br />
// For RESPONDING TO this one (should only be allowed if not already a child):
// < ResponseInputContainer storyId={this.props.storyId} inResponseId={this.props.response.id} />
