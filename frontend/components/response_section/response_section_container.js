import { connect } from 'react-redux';
// import { createResponse, fetchResponse, fetchAllResponses, updateResponse } from '../../actions/response_actions';
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
    // fetchAllResponses: id => dispatch(fetchAllResponses(id)),
    // createResponse: response => dispatch(createResponse(response)),
    // fetchResponse: response => dispatch(fetchResponse(response))
    // updateResponse: response => dispatch(updateResponse(response))
    // receiveErrors: errors => dispatch(receiveErrors(errors))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResponseSection);
