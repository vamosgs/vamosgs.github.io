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

export const setTumblrDesigns = payload => ({
  type: types.GET_DESIGNS_TUMBLR,
  payload,
});

export const setBehanceDesigns = payload => ({
  type: types.GET_DESIGNS_BEHANCE,
  payload,
});

export const fetchProjects = () => dispatch =>
  fetchApi(api.github, {
    headers: {
      'user-agent': 'vamosgs',
      'content-type': 'application/json',
    },
  }).then(res => dispatch(setProjects(filterProjects(res, projects))));

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

export const fetchTumblrDesigns = () => dispatch =>
  fetchApi(api.tumblr).then(data => dispatch(setTumblrDesigns(data.response.posts)));
export const fetchBehanceDesigns = () => dispatch =>
  fetchApi(api.behance, {
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate',
      'User-Agent': 'vamosgs',
    },
  }).then(res => dispatch(setBehanceDesigns(res.projects)));
