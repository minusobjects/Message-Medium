import React from 'react';
import { Link, hashHistory } from 'react-router';

class PublishOptions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {topicId: 1, wrapperClass: 'form-wrapper-2'}

    this.handleStoryInput = this.handleStoryInput.bind(this);
		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.changeWrapper = this.changeWrapper.bind(this);
	}

	componentDidMount(){
		if(this.props.storyData.topic){
			this.setState({topicId: this.props.storyData.topic.id, wrapperClass: 'form-wrapper-2'});
		}
	}

	componentWillReceiveProps(nextProps){
		// this.setState({wrapperClass: 'form-wrapper-2'});
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

  handleStoryInput(e) {

    e.preventDefault();

		// will also pass in topic data from the new form below

    let formData = new FormData();
    let file = this.props.storyData.file;

    formData.append("story[author_id]", this.props.storyData.author_id);
    formData.append("story[title]", this.props.storyData.title);
    formData.append("story[description]", this.props.storyData.description);
    formData.append("story[body]", this.props.storyData.body);
    formData.append("story[date]", this.encodeDate());
    formData.append("story[topic_id]", this.state.topicId);
    if(file){
      formData.append("story[main_image]", file);
    }

    if(this.props.storyData.id){
      formData.append("story[id]", this.props.storyData.id);
      this.props.updateStory(formData).then(() => hashHistory.push(`/stories/${this.props.storyData.id}`));;
    } else {
			// remember, the 'then' is receive the entire action
      this.props.createStory(formData).then(({story}) => hashHistory.push(`/stories/${story.id}`));
    }
  }

	handleOptionChange(e){
	  this.setState({
	    topicId: parseInt(e.target.value)
	  });
	}

	changeWrapper(e){
		if($(e.target).attr('id') === 'publish-wrapper'){
			this.setState({
				wrapperClass: 'form-wrapper-3'
			});
		}
	}

  render(){
		let topics = this.props.topics;
		topics = topics.map((topic) => {
			return(<li key={`li- ${topic.id}`}>
				<input type='radio' key={`radio- ${topic.id}`} value={topic.id} id={topic.id}
				name='topics_buttons' checked={this.state.topicId === topic.id} onChange={this.handleOptionChange}/>
				<label key={`label- ${topic.id}`} htmlFor={topic.id}>{topic.name}</label>
				<br />
			</li>);
		});

    return(

	      <div className='publishOptionsBox' id='publish-options-box'>
	      Select a topic:
					<div className='publish-link'>
						<form onSubmit={this.handleStoryInput} className='moveUp'>
								<div className='topicSelect'>
									<ul className='topicButtons'>
									  {topics}
									</ul>
								</div>
							<input type='submit' value='Publish Your Story' />
						</form>
					</div>
	      </div>
    );
  }

}

export default PublishOptions;

// <div className={this.state.wrapperClass} id='publish-wrapper' onClick={this.changeWrapper}>
// </div>
