import { connect } from 'react-redux';
import TitleAnim from './TitleAnim';

const mapStateToProps = ({ dataReducer }) => ({
  data: dataReducer,
});

const TitleAnimContainer = connect(mapStateToProps)(TitleAnim);

export default TitleAnimContainer;
