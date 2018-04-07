import { connect } from 'react-redux';
import Navigation from './Navigation';

const mapStateToProps = state => ({
  animate: state.mainReducer.animateTitle,
});

const mapDispatchToProps = dispatch => ({
  onNavigate: () => dispatch(),
});

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;
