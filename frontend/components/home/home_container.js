import { connect } from 'react-redux';
import { fetchAllStories } from './../../actions/story_actions';
import Home from './home';


const mapStateToProps = (state, ownProps) => {
  return({
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    stories: Object.values(state.stories),
    loading: state.loading.indexLoading
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllStories: (id) => dispatch(fetchAllStories(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
