import { connect } from 'react-redux';
import TitleAnim from './TitleAnim';

const mapStateToProps = state => ({
  animate: state.mainReducer.animateTitle,
});

const TitleAnimContainer = connect(mapStateToProps)(TitleAnim);

export default TitleAnimContainer;
