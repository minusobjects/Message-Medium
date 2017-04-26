import { connect } from 'react-redux';
import { fetchAllStories } from './../../actions/story_actions';
import { fetchAllResponses } from './../../actions/response_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state) => {
  return({
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    stories: Object.values(state.stories),
    responses: Object.values(state.responses)
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllStories: () => dispatch(fetchAllStories()),
    fetchAllResponses: (id) => dispatch(fetchAllResponses(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
