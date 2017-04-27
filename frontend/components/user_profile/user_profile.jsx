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
    this.props.fetchUser(this.props.params.id);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.params.id != nextProps.params.id){
      this.props.fetchUser(this.props.params.id);
    }
  }

  render(){
    debugger
    return(
      <div>
        hi
        <br />
        <br />
      </div>
    );
  }

}

export default withRouter(UserProfile);

// concat both arrays (stories and responses) into one array, then:
// c = a.sort(function (a, b) { return a.created_at.localeCompare(b.created_at); });
