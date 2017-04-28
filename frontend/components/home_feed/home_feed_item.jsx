import React from 'react';
import { Link, hashHistory } from 'react-router';

class HomeFeedItem extends React.Component {

  constructor(props){
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
    return(<div className='homeFeedItem'>
    <img src={this.props.story.main_image_url} />
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
        { this.props.story.author_name }
      </section>
      <section className='homeFeedItemDate'>
        { this.formatDate(this.props.story.date.split(',')) }
      </section>
    </section>
  </div>
);}

}

export default HomeFeedItem;
