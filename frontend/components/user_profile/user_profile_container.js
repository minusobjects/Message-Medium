import { connect } from 'react-redux';
import { fetchAllStories } from './../../actions/story_actions';
import { fetchAllResponses } from './../../actions/response_actions';
import { fetchUser } from './../../actions/user_actions';
import { createLike, destroyLike } from '../../actions/like_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
  return({
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    user: state.users[ownProps.params.id],
    responses: Object.values(state.responses),
    loading: state.loading.indexLoading
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    createLike: like => dispatch(createLike(like)),
    destroyLike: like => dispatch(destroyLike(like))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
