import React from 'react';
import ReactDOM from 'react-dom';
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

    const elem = ReactDOM.findDOMNode(this);
      elem.style.opacity = 0;
      elem.style.top = '-80px';
      window.requestAnimationFrame(function() {
        elem.style.transition = "top 200ms, opacity 150ms";
        elem.style.opacity = 1;
        elem.style.top = '0px';
      });
    }

  componentWillReceiveProps(newProps){
    const elem = ReactDOM.findDOMNode(this);
      elem.style.opacity = 0;
      elem.style.height = '0px';
      window.requestAnimationFrame(function() {
        elem.style.transition = "height 200ms, opacity 150ms";
        elem.style.opacity = 1;
        elem.style.height = '200px';
      });
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
    }
  };

    if(this.props.thisResponse){
      responseData.this_id = this.props.thisResponse.id;
      this.props.updateResponse(responseData);
    } else {
      this.props.createResponse(responseData);
    }

    const elem = ReactDOM.findDOMNode(this);
      elem.style.opacity = 1;
      elem.style.height = '200px';
      // elem.style.padding = 20;
      window.requestAnimationFrame(function() {
        elem.style.transition = "height 200ms, opacity 200ms";
        elem.style.opacity = 0;
        elem.style.height = '0px';
        // elem.style.padding = 0;
        // elem.style.top = '-80px';
        // elem.style.display = 'none';
      });

  }

  encodeDate(){
    let date = new Date();
    let month = (date.getMonth() + 1);
    let day = date.getDate();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `${month},${day},${year},${hour},${minutes},${seconds}`;
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

    let buttonText = 'Respond';

    if(this.props.thisResponse){
      buttonText = 'Edit your response'
    }

    let spacerDiv = {height: '15px', display: 'block'};

    return(
      <div className='responseInput'>
        <form onSubmit={this.handleResponseInput}>
        <label>
          <textarea placeholder="Write a response..." value={this.state.body} onChange={this.updateField("body")}>
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
