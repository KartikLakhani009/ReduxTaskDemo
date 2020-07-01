import {SET_LOADER} from '../Actions/Type';

export default (state = true, action) => {
  switch (action.type) {
    case SET_LOADER:
      state = Boolean(action.payload);
      return state;

    default:
      return state;
  }
};
