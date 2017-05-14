import React from 'react';
import { Link, hashHistory } from 'react-router';

import * as MUtil from '../../util/m_util';

import Response from '../response_section/response';

class MixedFeedItem extends React.Component {
	constructor(props) {
		super(props);
	}

render(){
  let thisItem = (<div></div>);
  let mainImagePath = this.props.mixedItem.story_main_image_url;
	let userImagePath = this.props.mixedItem.response_writer_photo_url;
	let storyDate;

  if(this.props.mixedItem.this_is === 'story'){
		storyDate = MUtil.formatDate(this.props.mixedItem.story_date.split(','));

    thisItem = (
				<div className='mixedItem-story'>
				<div className='left-half'>
					<div className='mixedItem-storyImage'>
						<Link to={`/stories/${this.props.mixedItem.story_id}`}>
        			<img src={mainImagePath} />
						</Link>
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
