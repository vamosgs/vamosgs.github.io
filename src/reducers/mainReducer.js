import * as types from '../constants';

const initialState = {
  tumblr_designs: [],
  projects: [],
  packages: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROJECTS:
      return { ...state, projects: action.payload };
    case types.GET_PACKAGES:
      return { ...state, packages: action.payload };
    default:
      return state;
  }
};

export default mainReducer;
