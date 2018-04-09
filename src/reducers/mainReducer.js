import * as types from '../constants';

const initialState = {
  tumblr_designs: {},
  projects: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROJECTS:
      console.log(action.payload);
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};

export default mainReducer;
