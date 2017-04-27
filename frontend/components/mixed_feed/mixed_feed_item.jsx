import React from 'react';
import { Link, hashHistory } from 'react-router';

import Response from '../response_section/response';

class MixedFeedItem extends React.Component {
	constructor(props) {
		super(props);
	}

render(){

  let thisItem = (<div></div>);
  let mainImagePath;
  let userImagePath;

  if(this.props.mixedItem.this_is === 'story'){
    if(this.props.mixedItem.story_main_image_url === 'story_default.png'){
      mainImagePath = 'assets/story_default.png';
    } else {
      mainImagePath = this.props.mixedItem.story_main_image_url;
    }
    thisItem = (<div className='mixedItem-story'>
        <img src={mainImagePath} />
        <br />
        <Link to={`/stories/${this.props.mixedItem.story_id}`}>
        { this.props.mixedItem.story_title }
        </Link>
        <br />
        { this.props.mixedItem.story_author_name }
        <br />
        { this.props.mixedItem.story_author_photo_url }
        <br />
        { this.props.mixedItem.story_date }
        <br />
        { this.props.mixedItem.story_description }
        <br />
      </div>);
  } else {

		if(this.props.mixedItem.response_writer_photo_url === 'missing.png'){
      userImagePath = 'assets/missing.png';
    } else {
      userImagePath = this.props.mixedItem.response_writer_photo_url;
    }

		let improvedResponse = this.props.mixedItem.response;
		improvedResponse.likes = this.props.mixedItem.response_likes;
		improvedResponse.writer_name = this.props.mixedItem.response_writer_name;
		improvedResponse.writer_photo_url = userImagePath;
    thisItem = (<ul><Response
      response={improvedResponse}
      currentUser={this.props.currentUser}
      loggedIn={this.props.loggedIn}
      destroyLike={this.props.destroyLike}
      createLike={this.props.createLike}
      isChild={false}
      isMixed={true}
			responses={this.props.responses}/></ul>);
  }

  return(<div>{thisItem}</div>);
}

}

export default MixedFeedItem;

// if(this.props.mixedItem.response_writer_photo_url === 'missing.png'){
//   userImagePath = 'assets/missing.png';
// } else {
//   userImagePath = this.props.mixedItem.response_writer_photo_url;
// }
// thisItem = (<div className='mixedItem-response'>
//   <Link to={`/stories/${this.props.mixedItem.response_story_id}`}>
//   Go to story.
//   </Link>
//   <br />
//   { this.props.mixedItem.response_writer_name }
//   <br />
//   <img src={ userImagePath } />
//   <br />
//   { this.props.mixedItem.response_date }
//   <br />
//   { this.props.mixedItem.response_body }
//   <br />
//   { this.props.mixedItem.response_liker_ids }
// </div>);
