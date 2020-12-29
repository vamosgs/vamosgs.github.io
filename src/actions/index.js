import api from '../../api';
import * as types from '../constants';
import { filterProjects, fetchApi, chunk } from '../utlis';

export const setProjects = payload => ({
  type: types.GET_PROJECTS,
  payload,
});

export const setPackages = payload => ({
  type: types.GET_PACKAGES,
  payload,
});

export const setDesigns = payload => ({
  type: types.GET_DESIGNS,
  payload,
});

export const setData = payload => ({
  type: types.GET_DATA,
  payload,
});
// OLD API VERSION WITH ONLINE JSON FILE
// export const fetchData = () => dispatch =>
//   fetchApi(api.data, {
//     headers: {
//       'secret-key': key,
//       private: true,
//     },
//   }).then(data => dispatch(setData(data)));

export const fetchData = () => api.data;

export const fetchProjects = (projects, filter) => dispatch =>
  fetchApi(api.github, {
    headers: {
      'user-agent': 'vamosgs',
      'content-type': 'application/json',
    },
  }).then(res => dispatch(setProjects(filterProjects(res, projects, filter))));

export const fetchPackages = packages => (dispatch) => {
  let result = [];
  packages.forEach(pkg =>
    fetchApi(`${api.npm}${pkg}`, {}).then((res) => {
      result = [...result, res.collected.metadata];
      if (result.length === packages.length) {
        dispatch(setPackages(result));
      }
    }));
};

export const fetchDesigns = () => dispatch =>
  fetchApi(api.tumblr).then(data => dispatch(setDesigns(chunk(data.response.posts, 3))));
