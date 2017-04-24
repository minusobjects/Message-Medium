import { connect } from 'react-redux';
import { createStory, updateStory } from '../../actions/story_actions';
import InputNav from './input_nav';


const mapStateToProps = (state, ownProps) => {
  return({
    currentUser: state.session.currentUser,
    storyData: ownProps.storyData
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    createStory: story => dispatch(createStory(story)),
    updateStory: story => dispatch(updateStory(story))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputNav);
