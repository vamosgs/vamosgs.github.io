import axios from 'axios';
import api from '../api';
import * as types from '../constants';
// export const api = url => fetch(url).then(response => response.json());

export const setProjects = paylod => ({
  type: types.GET_PROJECTS,
  paylod,
});

export const fetchProjects = () => dispatch =>
  axios({
    method: 'GET',
    headers: { 'User-Agent': 'VamOSGS' },
    url: api.github,
  })
    .then(res => res.data)
    .then((res) => {
      dispatch(setProjects(res));
    });
