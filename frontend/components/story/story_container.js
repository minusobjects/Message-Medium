import { connect } from 'react-redux';
import { fetchAllStories, fetchStory } from '../../actions/story_actions';
import { fetchAllResponses, fetchResponse } from '../../actions/response_actions';
import { fetchAllLikes, fetchLike, createLike, destroyLike } from '../../actions/like_actions';
import { fetchAllFollowings, fetchFollowing, createFollowing, destroyFollowing } from '../../actions/following_actions';
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
    fetchResponse: responseId => dispatch(fetchResponse(responseId)),
    fetchAllLikes: id => dispatch(fetchAllLikes(id)),
    fetchLike: likeId => dispatch(fetchAllLikes(likeId)),
    createLike: like => dispatch(createLike(like)),
    destroyLike: like => dispatch(destroyLike(like)),
    fetchAllFollowings: id => dispatch(fetchAllFollowings(id)),
    fetchFollowing: followingId => dispatch(fetchAllFollowings(followingId)),
    createFollowing: following => dispatch(createFollowing(following)),
    destroyFollowing: following => dispatch(destroyFollowing(following))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Story);
