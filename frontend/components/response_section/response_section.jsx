import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

import Response from './response';

class ResponseSection extends React.Component {

  constructor(props){
    super(props);

    this.flatten = this.flatten.bind(this);
  }

  // flatten arrays
  flatten(ary) {
      var ret = [];
      for(var i = 0; i < ary.length; i++) {
          if(Array.isArray(ary[i])) {
              ret = ret.concat(this.flatten(ary[i]));
          } else {
              ret.push(ary[i]);
          }
      }
      return ret;
  }

  render(){
    let responses;
    if(this.props.responses){

      let allResponses = this.props.responses;
      let obj = {};
      let tempArr = [];

      allResponses.forEach((response) => {
        if(response.in_response_id){
          tempArr.push(response);
        } else {
          obj[response.id] = [];
          obj[response.id].push(response);
        }
      });

      tempArr.forEach((response) => {
        obj[response.in_response_id].push(response);
      });

      let ordered = Object.values(obj);

      ordered = this.flatten(ordered);

      responses = ordered.map((response) => {
        let isChild = false;
        if(response.in_response_id){
          isChild = true;
        }
        return(
          < Response response={response}
          storyId={this.props.storyId}
          isChild = {isChild}
          loggedIn = {this.props.loggedIn}
          currentUser = {this.props.currentUser}
          createLike = {this.props.createLike}
          destroyLike = {this.props.destroyLike}
          key={response.id} />
        );
      });

    }

    return(
      <ul>
        { responses }
      </ul>
    );
  }

}

export default withRouter(ResponseSection);
