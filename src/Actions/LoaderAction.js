import {SET_LOADER} from '../Actions/Type';

export const TurnOnLoader = payload => {
  return {
    type: SET_LOADER,
    payload,
  };
};
