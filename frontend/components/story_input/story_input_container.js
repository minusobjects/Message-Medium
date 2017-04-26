import { connect } from 'react-redux';
import { createStory, fetchStory, updateStory, receiveErrors } from '../../actions/story_actions';
import StoryInput from './story_input';


const mapStateToProps = (state, ownProps) => {
  let story;
  if(ownProps.params.id){
      story = state.stories[ownProps.params.id];
  }
  return ({
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    errors: state.session.errors,
    story: story
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    createStory: story => dispatch(createStory(story)),
    fetchStory: story => dispatch(fetchStory(story)),
    updateStory: story => dispatch(updateStory(story)),
    receiveErrors: errors => dispatch(receiveErrors(errors))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryInput);
