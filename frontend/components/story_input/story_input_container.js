import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import StoryInput from './story_input';


const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => {
  return {
    // not sure yet
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryInput);
