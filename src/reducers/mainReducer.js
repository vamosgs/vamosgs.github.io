import * as types from '../constants';

const initialState = {
  tumblr_designs: {},
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log(action.payload);
      return { ...state, nice: true };
    case types.GET_DESIGNS_TUMBLR:
      console.log(action.data);
      return { ...state };
    default:
      return state;
  }
};

export default mainReducer;
