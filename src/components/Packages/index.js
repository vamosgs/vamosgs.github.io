import { connect } from 'react-redux';
import Packages from './Packages';
import { fetchPackages, fetchData } from '../../actions';

const mapStateToProps = ({ mainReducer, dataReducer }) => ({
  packagesList: fetchData().packages,
  packages: mainReducer.packages,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPackages: (packagesList) => dispatch(fetchPackages(packagesList)),
});

const PackagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Packages);

export default PackagesContainer;
