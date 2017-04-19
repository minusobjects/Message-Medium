import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import HomeNav from './home_nav';


const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: user => dispatch(logout(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeNav);
