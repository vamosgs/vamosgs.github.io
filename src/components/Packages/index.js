import { connect } from 'react-redux';
import Packages from './Packages';
import { fetchPackages } from '../../actions';

const mapStateToProps = ({ mainReducer }) => ({
  packages: mainReducer.packages,
});

const mapDispatchToProps = dispatch => ({
  fetchPackages: () => dispatch(fetchPackages()),
});

const PackagesContainer = connect(mapStateToProps, mapDispatchToProps)(Packages);

export default PackagesContainer;
