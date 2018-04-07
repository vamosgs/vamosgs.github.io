import * as types from '../constants';

const initialState = {};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TEST:
      return { ...state };
    default:
      return state;
  }
};

export default mainReducer;
