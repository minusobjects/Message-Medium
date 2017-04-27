import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';


class UserProfile extends React.Component {

  constructor(props){
    super(props);

    this.state = {storiesByUser: '', responsesByUser: '',
      storiesLikedByUser: '', responsesLikedByUser: '',
      storiesByFollowed: '', responsesByFollowed: ''}
  }

  componentDidMount(){
    // this.props.fetchAllStories({authorId: this.props.params.id})
    // .then(() => this.setState({storiesByUser: this.props.stories}));
    // this.props.fetchAllResponses({writerId: this.props.params.id})
    // .then(() => this.setState({responsesByUser: this.props.responses}));

    // SHOULD BE ABLE TO JUST GET EVERYTHING THROUGH DB INITIALLY!

  }

  componentWillReceiveProps(nextProps){

  }

  render(){
    console.log(this.state);
    // debugger
    return(
      <div>
        hi
        <br />
        STORIES BY THIS USER:
        {this.props.stories.length}
        <br />
        RESPONSES BY THIS USER:
        {this.props.responses.length}
        <br />
      </div>
    );
  }

}

export default withRouter(UserProfile);

// concat both arrays (stories and responses) into one array, then:
// c = a.sort(function (a, b) { return a.created_at.localeCompare(b.created_at); });
