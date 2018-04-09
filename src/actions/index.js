import api from '../api';
import * as types from '../constants';

export const setProjects = payload => ({
  type: types.GET_PROJECTS,
  payload,
});

export const fetchProjects = () => dispatch =>
  fetch(api.github, {
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(res => dispatch(setProjects(res)));
