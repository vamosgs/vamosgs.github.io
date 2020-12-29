import { connect } from 'react-redux';
import TitleAnim from './TitleAnim';
import { fetchData } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  data: () => dispatch(fetchData),
});


const TitleAnimContainer = connect(
  null,
  mapDispatchToProps,
)(TitleAnim);

export default TitleAnimContainer;
