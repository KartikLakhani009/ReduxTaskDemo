// General api to access data
import {BASEAPI} from '../../statics/GlobalStatics';
export default async function api(path, params, method, token) {
  let options;
  options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && {token: token}),
    },
    method: method,
    ...(params && {body: JSON.stringify(params)}),
  };

  return await fetch(BASEAPI + path, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log('API Error :', response);
        data = {
          title: 'error',
          response,
        };
        return data;
      }
    })
    .then(json => {
      // console.log('API Data : ', json);
      if (json.title == 'error') return json;
      data = {
        title: 'succes',
        json,
      };
      return data;
    })
    .catch(error => {
      console.log('API Error :', error);
      data = {
        title: 'error',
        error,
      };
      return data;
    });
}
