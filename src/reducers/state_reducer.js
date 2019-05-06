import {
    BEER_INDEX
} from '../actions/types';

const initialState = {
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BEER_INDEX:
      return { ...state, beer: action.payload.data };
  }
  return state;
}
