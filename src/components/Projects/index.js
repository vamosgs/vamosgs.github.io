import { connect } from 'react-redux';
import Projects from './Projects';
import { fetchProjects } from '../../actions';

const mapStateToProps = ({ mainReducer, dataReducer }) => ({
  projectsList: dataReducer.projects,
  projects: mainReducer.projects,
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: projectsList => dispatch(fetchProjects(projectsList)),
});

const ProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(Projects);

export default ProjectsContainer;
