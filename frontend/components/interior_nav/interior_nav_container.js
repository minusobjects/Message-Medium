import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import InteriorNav from './interior_nav';


const mapStateToProps = (state, ownProps) => {
  return({
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    scrollDir: ownProps.scrollDir,
    scrollTop: ownProps.scrollTop
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: user => dispatch(logout(user)),
    login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InteriorNav);
