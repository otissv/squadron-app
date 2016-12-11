import axios from 'axios';
import { cleanObj } from 'ufunc';
import empty from 'is-empty';


// get the field name from the query
// function field (str) {
//   return str.trim().split(/[\{ ]/)[1];
// }


// make ajax request to graphql server
export function query ({ auth, query, url, variables }) {
  const action = query.split(' ')[1];

  const data = {
    auth,
    action,
    query: `${query}`,
    variables
  };

  const axiosConfig = {
    url,
    method: 'POST',
    options: {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  };

  return axios({...axiosConfig, data }).then(response => {
    const success = cleanObj(response.data.data[action]);
    const errors = empty(success)
    ? [
        { message: 'Request failed' },
       response.data.errors ?  { ...response.data.errors} : null
     ]
    : response.data.errors;

    return {
      data: success,
      errors: errors
    }
  });
};
