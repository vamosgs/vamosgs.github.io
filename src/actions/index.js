import api from '../api';
import * as types from '../constants';
import { filterProjects, fetchApi } from '../utlis';
import { projects } from '../../content';

export const setProjects = payload => ({
  type: types.GET_PROJECTS,
  payload,
});

export const setPackages = payload => ({
  type: types.GET_PACKAGES,
  payload,
});

export const fetchProjects = () => dispatch =>
  fetchApi(api.github, {
    headers: {
      'user-agent': 'vamosgs',
      'content-type': 'application/json',
    },
  }).then(res =>
    (projects[0] !== 'all'
      ? dispatch(setProjects(filterProjects(res, projects)))
      : dispatch(setProjects(res))));

export const fetchPackages = () => (dispatch) => {
  let packages = [];
  api.npm.forEach(url =>
    fetchApi(url, {}).then((res) => {
      packages = [...packages, res.collected.metadata];
      if (packages.length === 2) {
        dispatch(setPackages(packages));
      }
    }));
};
