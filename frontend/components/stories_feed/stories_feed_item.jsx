import React from 'react';
import { Link, hashHistory } from 'react-router';

const StoriesFeedItem = ({ story }) => (
  <li>
    <img src={story.main_image_url} />
    <br />
    <Link to={`/stories/${story.id}`}>
    { story.title }
    </Link>
    <br />
    { story.author_name }
    <br />
    { story.date }
    <br />
    { story.description }
    <br />
  </li>
);

export default StoriesFeedItem;
