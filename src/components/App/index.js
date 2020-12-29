import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './App';
import { fetchData } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(fetchData),
});

const AppContainer = withRouter(connect(null, mapDispatchToProps)(App));
export default AppContainer;
