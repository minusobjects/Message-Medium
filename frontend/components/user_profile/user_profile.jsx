import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';


class UserProfile extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllStories();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.stories.length > this.props.stories.length){
      this.props.fetchAllResponses({storyId: nextProps.stories[2].id});
    }
  }

  render(){
    debugger
    return(
      <div>
        hi
        <br />
        STORIES:
        {this.props.stories.length}
        <br />
        RESPONSES TO THIRD STORY:
        {this.props.responses.length}
      </div>
    );
  }

}

export default withRouter(UserProfile);

// concat both arrays (stories and responses) into one array, then:
// c = a.sort(function (a, b) { return a.created_at.localeCompare(b.created_at); });
