import {FETCH_API_DATA, Get_Freq_data, FILTERBY_DATE} from '../Actions/Type';

import {DateSort} from '../lib/Fnctionality/DateSort';

const data = {
  list: [],
  temp_Filter: [],
  temp: [],
  Filter_req: false,
};

export default (state = data, action) => {
  switch (action.type) {
    case FETCH_API_DATA:
      // let d = JSON.parse(action.payload);

      let d = action.payload.json.hits;
      // console.log('Before array of d : ', d);

      return {...state, list: d};

    case Get_Freq_data:
      let index = action.index;
      let end = action.end;
      let c = [];
      // let j = 0;

      // let len = state.emp.length;
      console.log('Before array of c : ', c);
      // console.log('state.emp.length :' + state.emp.length);
      // b[0] = 'jhdbcjkndk'
      if (state.temp.length != 0) {
        for (let i = index; i < end; i++) {
          c.push(state.list[i]);
        }

        console.log('after array of c : ', c);

        return {...state.list, temp: c};
      }

      return {...state};

    case FILTERBY_DATE:
      let sortby = action.payload;

      let sortedArray = DateSort(state.list, sortby);

      return {...state, temp_Filter: sortedArray, Filter_req: true};

    default:
      return state;
  }
};
