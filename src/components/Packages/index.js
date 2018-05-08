import { connect } from 'react-redux';
import Packages from './Packages';
import { fetchPackages } from '../../actions';

const mapStateToProps = ({ mainReducer, dataReducer }) => ({
  packagesList: dataReducer.packages,
  packages: mainReducer.packages,
});

const mapDispatchToProps = dispatch => ({
  fetchPackages: packagesList => dispatch(fetchPackages(packagesList)),
});

const PackagesContainer = connect(mapStateToProps, mapDispatchToProps)(Packages);

export default PackagesContainer;
