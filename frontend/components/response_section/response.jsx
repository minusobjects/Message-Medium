import React from 'react';
import { Link, hashHistory } from 'react-router';

import ResponseInputContainer from '../response_input/response_input_container';

class Response extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <li>
        Child: { this.props.isChild.toString() }
        <br />
        <img src={this.props.response.writer_photo_url} width='50px'/>
        <br />
        { this.props.response.writer_name }
        <br />
        { this.props.response.date }
        <br />
        { this.props.response.body }
        <br />
        For EDITING this one:
        < ResponseInputContainer storyId={this.props.storyId} thisResponse={this.props.response} this_id={this.props.response.id} />
        <br />
        For RESPONDING TO this one (should only be allowed if not already a child):
        < ResponseInputContainer storyId={this.props.storyId} inResponseId={this.props.response.id} />
      </li>
    );
  }

}

export default Response;
