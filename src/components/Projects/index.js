import { connect } from 'react-redux';
import Projects from './Projects';
import { fetchProjects } from '../../actions';

const mapStateToProps = ({ mainReducer, dataReducer }) => ({
  projectsList: dataReducer.projects,
  filter: dataReducer.projectsShowType,
  projects: mainReducer.projects,
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: (projectsList, filter) => dispatch(fetchProjects(projectsList, filter)),
});

const ProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(Projects);

export default ProjectsContainer;
