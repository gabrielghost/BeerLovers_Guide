import axios from 'axios';
import { BEER_INDEX } from './types';

const ROOT_URL = 'https://sandbox-api.brewerydb.com/v2/beers/?key=024c69b598351ce63098c40a50cd7171'

function apiEndpointURLConstruction(endpoint){
  let endpoint = `https://sandbox-api.brewerydb.com/v2/${endpoint}/?key=024c69b598351ce63098c40a50cd7171`
  return endpoint
}

export function beerIndex () {
  return function (dispatch) {
    axios.get(`${apiEndpointURLConstruction('beers')}`, { headers: { 'Content-Type': 'application/json' } })
      .then((response) => {
        dispatch({ type: BEER_INDEX, payload: response });
      })
      .catch((err) => {
        dispatch(authError(err.data.error));
      });
  };
}
