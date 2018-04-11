import { connect } from 'react-redux';
import Designs from './Designs';
import { fetchTumblrDesigns, fetchBehanceDesigns } from '../../actions';

const mapStateToProps = ({ mainReducer }) => ({
  tumblr: mainReducer.designs.tumblr,
  behance: mainReducer.designs.behance,
});

const mapDispatchToProps = dispatch => ({
  fetchTumblr: () => dispatch(fetchTumblrDesigns()),
  fetchBehance: () => dispatch(fetchBehanceDesigns()),
});

const DesignsContainer = connect(mapStateToProps, mapDispatchToProps)(Designs);

export default DesignsContainer;
