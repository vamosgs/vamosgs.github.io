import * as types from '../constants';

const initialState = {
  stackLoaded: false,
  designsLoaded: false,
};

const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STACK_LOAD:
      return { ...state, stackLoaded: true };
    case types.DESIGNS_LOAD:
      return { ...state, designsLoaded: true };
    default:
      return state;
  }
};

export default loadReducer;
