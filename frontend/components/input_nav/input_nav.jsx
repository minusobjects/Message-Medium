import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter, hashHistory } from 'react-router';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PublishOptions from '../publish_options/publish_options';

class InputNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {publishOptions: ''}

		this.loadPublishOptions = this.loadPublishOptions.bind(this);
	}

  componentDidMount(){
		this.props.fetchAllTopics();
  }

  componentWillReceiveProps(newProps){
  }

	loadPublishOptions(e){
		e.preventDefault();

		this.setState({publishOptions: (
			<PublishOptions
			topics={this.props.topics}
			storyData={this.props.storyData}
			updateStory={this.props.updateStory}
			createStory={this.props.createStory}
			visible={true}/>
		)});
	}

  render() {
    let imageUrl;
		let userUrl;

    if(this.props.currentUser){
      imageUrl = this.props.currentUser.image_url;
			userUrl = `/users/${this.props.currentUser.id}`;
    }

    let avatarBox = (<div className='add-margin avatar-container'>
		<Link to={ userUrl }>
      <img src={ imageUrl } />
			</Link>
    </div>);

    return(
      <div className='nav-outer-input'>
        <div className='input-nav'>
          <Link to='/'>
            <img src={ window.images.first_logo } height='40px' id='logo' />
          </Link>
          <div className='nav-right-input'>
            <div className='publish-link'>
            <a onClick={this.loadPublishOptions}>
              Publish
            </a>
						<CSSTransitionGroup
		          transitionName="profileFeedTrans"
		          transitionEnterTimeout={200}
		          transitionLeaveTimeout={200}>
						{this.state.publishOptions}
						</CSSTransitionGroup>
            </div>
	            { avatarBox }
						</div>
          </div>
      </div>
    );
  }

}

export default withRouter(InputNav);
