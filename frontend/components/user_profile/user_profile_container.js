import { connect } from 'react-redux';
import { fetchAllStories } from './../../actions/story_actions';
import { fetchAllResponses } from './../../actions/response_actions';
import { fetchUser } from './../../actions/user_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
  return({
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    // stories: Object.values(state.stories),
    // responses: Object.values(state.responses),
    user: state.users[ownProps.params.id]
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchAllStories: (id) => dispatch(fetchAllStories(id)),
    // fetchAllResponses: (id) => dispatch(fetchAllResponses(id)),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
