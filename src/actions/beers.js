import axios from 'axios';
import { BEER_INDEX } from './types';
import { authError } from './auth';
import response from '../serverEmulation/beer'

const ROOT_URL = 'https://sandbox-api.brewerydb.com/v2/beers/?key=024c69b598351ce63098c40a50cd7171'

function apiEndpointURLConstruction(endpoint){
  let apiUrl = `https://sandbox-api.brewerydb.com/v2/${endpoint}/?key=024c69b598351ce63098c40a50cd7171`
  return apiUrl
}

export function beerIndex () {
  return function (dispatch) {
        dispatch({ type: BEER_INDEX, payload: response });
  };
}
