import { connect } from 'react-redux';
import { fetchAllStories, fetchStory } from '../../actions/story_actions';
import { fetchAllResponses, fetchResponse } from '../../actions/response_actions';
import Story from './story';


const mapStateToProps = (state, ownProps) => {
  return({
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    story: state.stories[ownProps.params.id],
    responses: Object.values(state.responses)
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllStories: () => dispatch(fetchAllStories()),
    fetchStory: storyId => dispatch(fetchStory(storyId)),
    fetchAllResponses: storyId => dispatch(fetchAllResponses(storyId)),
    fetchResponse: responseId => dispatch(fetchResponse(responseId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Story);
