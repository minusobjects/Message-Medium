import ReactQuill from 'react-quill';
import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class StoryInput extends React.Component {

  constructor(props){
    super(props);
    this.state = {text: ""};

    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.redirectIfNotLoggedIn();
    // this.props.receiveErrors([]);
  }

	componentDidUpdate() {
		this.redirectIfNotLoggedIn();
	}
	redirectIfNotLoggedIn() {
		if (!this.props.loggedIn) {
			hashHistory.push("/signin");
		}
	}

  update(value){
    // debugger
    this.setState({text: value});
    console.log(this.state);
  }

  render(){
    let elem = document.getElementById('test');

    return(
      <div>
        I am the story input!
        <br />
        <ReactQuill value={this.state.text} onChange={this.update} theme="bubble" className='test-class'/>
      </div>
    );
  }


}

export default withRouter(StoryInput);
