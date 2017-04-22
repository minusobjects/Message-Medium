import { connect } from 'react-redux';
import { fetchAllStories, fetchStory } from '../../actions/story_actions';
import Story from './story';


const mapStateToProps = (state, ownProps) => {
  return({
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    story: state.stories[ownProps.params.id]
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllStories: () => dispatch(fetchAllStories()),
    fetchStory: storyId => dispatch(fetchStory(storyId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Story);
