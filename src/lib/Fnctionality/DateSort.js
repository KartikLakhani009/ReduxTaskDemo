import moment from 'moment';
import _ from 'lodash';

export const DateSort = (item, order) => {
  // const dateArray = [{date:"2018-05-11"},{date:"2018-05-12"},{date:"2018-05-10"}]

  console.log('Function called ');

  const orderBy = order == 'ASC' ? 'asc' : 'desc';

  const sortedDates = _.orderBy(
    item,
    o => {
      var a = moment(o.created_at).format('YYYYMMDD');

      console.log('Data : ', a, +' Dates : ');

      return a;
    },
    [orderBy],
  );

  console.log(sortedDates);

  return sortedDates;
};

// const sortedArray = _.orderBy(item,(o)=>moment(o.created_at.format('YYYYMMDD')
// , ['asc']);
