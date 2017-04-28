import { connect } from 'react-redux';
import { createStory, updateStory } from '../../actions/story_actions';
import { fetchAllTopics } from './../../actions/topic_actions';
import InputNav from './input_nav';


const mapStateToProps = (state, ownProps) => {
  return({
    currentUser: state.session.currentUser,
    storyData: ownProps.storyData,
    topics: Object.values(state.topics),
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    createStory: story => dispatch(createStory(story)),
    updateStory: story => dispatch(updateStory(story)),
    fetchAllTopics: () => dispatch(fetchAllTopics())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputNav);
