// unedited
import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import AuthForm from './auth_form';


const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => {
  // const formType = location.pathname.slice(1);
  // const processForm = (formType === 'login') ? login : signup;

  return {
    // processForm: user => dispatch(processForm(user)),
    // formType
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
