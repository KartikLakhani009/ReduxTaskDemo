import {FETCH_API_DATA, Get_Freq_data, FILTERBY_DATE} from './Type';

import API from '../lib/API/index';

export const Fetch_Async_Data = () => {
  return async dispatch => {
    await API('', '', 'get', null)
      .then(json => {
        // console.log(json);
        dispatch({
          type: FETCH_API_DATA,
          payload: json,
        });
      })
      .catch(error => console.error('error', error));
  };
};

export const Filter_By_Date = sort => {
  return {
    type: FILTERBY_DATE,
    payload: sort,
  };
};
