import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter, hashHistory } from 'react-router';

import * as MUtil from '../../util/m_util';

class ResponseInput extends React.Component {

  constructor(props){
    super(props);
    this.state = {body: "", change: ""};

    this.handleResponseInput = this.handleResponseInput.bind(this);
  }

  componentDidMount() {
    this.props.receiveErrors([]);
    if(this.props.thisResponse){
      this.setState({body: this.props.thisResponse.body});
    }
  }

  componentWillReceiveProps(newProps){
  }

  updateField(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleResponseInput(e) {
    e.preventDefault();
    let body = this.state.body;
    let date = MUtil.encodeDate();
    let writer_id = this.props.currentUser.id;
    let story_id = this.props.storyId;
    let in_response_id = this.props.inResponseId;

    let responseData = {response:{
      body: body,
      date: date,
      writer_id: writer_id,
      story_id: story_id,
      in_response_id: in_response_id
    }
  };

    if(this.props.thisResponse){
      responseData.this_id = this.props.thisResponse.id;
      this.props.updateResponse(responseData);
    } else {
      this.props.createResponse(responseData);
    }

  }

	renderErrors() {
		return(
			<ul className='errors-list-response-input'>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}


  render(){
    let buttonText = 'Respond';

    if(this.props.thisResponse){
      buttonText = 'Edit your response'
    }

    let spacerDiv = {height: '15px', display: 'block'};

    return(
      <div className='responseInput'>
        <form onSubmit={this.handleResponseInput}>
        {this.renderErrors()}
        <label>
          <textarea placeholder="Write a response..."
            value={this.state.body}
            onChange={this.updateField("body")}>
          </textarea>
        </label>
        <div className='responseSubmitWrapper'>
          <input type='submit' value={buttonText} />
        </div>
        </form>
        <div style={spacerDiv}></div>
        </div>
      );
    }

}

export default withRouter(ResponseInput);
