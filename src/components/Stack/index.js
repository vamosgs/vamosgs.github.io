import { connect } from 'react-redux';
import { stackLoad } from '../../actions';
import Stack from './Stack';

const mapStateToProps = ({ loadReducer }) => ({
  loaded: loadReducer.stackLoaded,
});

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(stackLoad),
});

const StackContainer = connect(mapStateToProps, mapDispatchToProps)(Stack);

export default StackContainer;
