import React from 'react';
import { Link, hashHistory } from 'react-router';

// <div className='homeFeedAvatar'>
// <img src={story.author_photo_url} />
// </div>

// also need to format date! time to put it in a util file!

const HomeFeedItem = ({ story }) => (
  <div className='homeFeedItem'>
    <img src={story.main_image_url} />
    <br />
    <section className='storyInfoSection'>
      <section className='homeFeedItemHeadline'>
        <Link to={`/stories/${story.id}`}>
          { story.title }
        </Link>
      </section>
      <section className='homeFeedItemDescription'>
        { story.description }
      </section>
      <section className='homeFeedItemAuthor'>
        { story.author_name }
      </section>
      <section className='homeFeedItemDate'>
        { story.date }
      </section>
    </section>
  </div>
);

export default HomeFeedItem;
