import { connect } from 'react-redux';
// import { createResponse, fetchResponse, fetchAllResponses, updateResponse } from '../../actions/response_actions';
import { fetchAllLikes, fetchLike, createLike, destroyLike } from '../../actions/like_actions';
import ResponseSection from './response_section';

const mapStateToProps = (state, ownProps) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    responses: ownProps.responses,
    storyId: ownProps.storyId,
    writerId: ownProps.writerId
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllLikes: id => dispatch(fetchAllLikes(id)),
    fetchLike: like => dispatch(fetchLike(like)),
    createLike: like => dispatch(createLike(like)),
    updateLike: like => dispatch(updateLike(like)),
    destroyLike: like => dispatch(destroyLike(like))
    // receiveErrors: errors => dispatch(receiveErrors(errors))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResponseSection);
