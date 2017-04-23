import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class ResponseInput extends React.Component {

  constructor(props){
    super(props);
    this.state = { body: ""};

    this.handleResponseInput = this.handleResponseInput.bind(this);
  }

  componentDidMount() {
    if(this.props.thisResponse){
      this.setState({body: this.props.thisResponse.body});
    }
  }

  updateField(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleResponseInput(e) {
    e.preventDefault();
    // params.require(:response).permit(:writer_id, :story_id, :in_response_id, :body, :date)
    let body = this.state.body;
    let date = this.encodeDate();
    let writer_id = this.props.currentUser.id;
    let story_id = this.props.storyId;
    let in_response_id = this.props.inResponseId;

    let responseData = {response:{
      body: body,
      date: date,
      writer_id: writer_id,
      story_id: story_id,
      in_response_id: in_response_id
    }};

    if(this.props.thisResponse){
      // responseData.hey_dude = 'check it out';
      responseData.this_id = this.props.this_id;
      this.props.updateResponse(responseData);
    } else {
      this.props.createResponse(responseData);
    }

    // SHOULD BE A PROMISE
    // SHOULD GO TO STORY PAGE
    // hashHistory.push("/");
  }

  encodeDate(){
    let date = new Date();
    let month = (date.getMonth() + 1);
    let day = date.getDate();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return `${month},${day},${year},${hour},${minutes}`;
  }

	renderErrors() {
		return(
			<ul className='errors-list'>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}


  render(){
    return(
      <div>
        <br />
        <form onSubmit={this.handleResponseInput}>
        <label>
          <textarea placeholder="Response goes here." value={this.state.body} onChange={this.updateField("body")}>
          </textarea>
        </label>
        <br />
        <input type='submit' value='Submit response!' />
        </form>
        <br />
        </div>
      );
    }

}

export default withRouter(ResponseInput);
