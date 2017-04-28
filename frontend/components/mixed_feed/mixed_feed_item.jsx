import React from 'react';
import { Link, hashHistory } from 'react-router';

import Response from '../response_section/response';

class MixedFeedItem extends React.Component {
	constructor(props) {
		super(props);
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

render(){
  let thisItem = (<div></div>);
  let mainImagePath = this.props.mixedItem.story_main_image_url;
	let userImagePath = this.props.mixedItem.response_writer_photo_url;
	let storyDate;

  if(this.props.mixedItem.this_is === 'story'){
		storyDate = this.formatDate(this.props.mixedItem.story_date.split(','));

    thisItem = (
				<div className='mixedItem-story'>
				<div className='left-half'>
					<div className='mixedItem-storyImage'>
        		<img src={mainImagePath} />
        	</div>
					</div>
					<div className='right-half'>
					<div className='mixedItem-storyTitle'>
        		<Link to={`/stories/${this.props.mixedItem.story_id}`}>
        			{ this.props.mixedItem.story_title }
        		</Link>
        	</div>
					<div className='mixedItem-storyDescription'>
        		{ this.props.mixedItem.story_description }
        	</div>
					<div className='mixedItem-storyAuthor'>
						<div className='mixedItem-authorPhotoContainer'>
							<img src={ this.props.mixedItem.story_author_photo_url } />
						</div>
						<div>
							<div className='mixedItem-authorName'>
							<Link to={`/users/${this.props.mixedItem.story_author_id}`}>
		        		{ this.props.mixedItem.story_author_name }
							</Link>
							</div>
							<div className='mixedItem-storyDate'>
		        		{ storyDate }
		        	</div>
						</div>
        	</div>
					</div>
      	</div>
		);
  } else {

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
