import axios from 'axios';
import { ROOT_URL } from './index';
import history from '../history';


export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
