import React from 'react';
import { Link, hashHistory } from 'react-router';

import * as MUtil from '../../util/m_util';

class HomeFeedItem extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(<div className='homeFeedItem'>
    <Link to={`/stories/${this.props.story.id}`}>
      <img src={this.props.story.main_image_url} />
    </Link>
    <br />
    <section className='storyInfoSection'>
      <section className='homeFeedItemHeadline'>
        <Link to={`/stories/${this.props.story.id}`}>
          { this.props.story.title }
        </Link>
      </section>
      <section className='homeFeedItemDescription'>
        { this.props.story.description }
      </section>
      <section className='homeFeedItemAuthor'>
      <Link to={`/users/${this.props.story.author_id}`}>
        <span className='lightener'>
          { this.props.story.author_name }
        </span>
      </Link>
      </section>
      <section className='homeFeedItemDate'>
        { MUtil.formatDate(this.props.story.date.split(',')) }
      </section>
    </section>
  </div>
);}

}

export default HomeFeedItem;
