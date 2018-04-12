import { connect } from 'react-redux';
import Designs from './Designs';
import { fetchDesigns } from '../../actions';

const mapStateToProps = ({ mainReducer }) => ({
  designs: mainReducer.designs,
});

const mapDispatchToProps = dispatch => ({
  fetchDesigns: () => dispatch(fetchDesigns()),
});

const DesignsContainer = connect(mapStateToProps, mapDispatchToProps)(Designs);

export default DesignsContainer;
