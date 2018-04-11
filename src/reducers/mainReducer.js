import * as types from '../constants';

const initialState = {
  designs: {
    tumblr: [],
    behance: [],
  },
  projects: [],
  packages: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROJECTS:
      return { ...state, projects: action.payload };
    case types.GET_PACKAGES:
      return { ...state, packages: action.payload };
    case types.GET_DESIGNS_BEHANCE:
      console.log(action.payload);
      return { ...state, designs: { behance: action.payload } };
    case types.GET_DESIGNS_TUMBLR:
      return { ...state, designs: { tumblr: action.payload } };
    default:
      return state;
  }
};

export default mainReducer;
