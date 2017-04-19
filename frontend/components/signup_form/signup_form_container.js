import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SignupForm from './signup_form';


const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
