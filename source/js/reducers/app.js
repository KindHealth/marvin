import { Map } from 'immutable';

import {
  INCREMENT,
  DECREMENT,
  SAVE_NUMBER,
} from 'actions/app';

const initialState = Map({
  counter: 0,
  numbers: [],
});

const actionsMap = {
  [INCREMENT]: (state) => {
    const counter = state.get('counter') + 1;

    return state.merge(Map({
      counter,
    }));
  },
  [DECREMENT]: (state) => {
    const counter = state.get('counter') - 1;

    return state.merge(Map({
      counter,
    }));
  },
  [SAVE_NUMBER]: (state, action) => {
    // logic needs to be added
    return state.merge(Map({
      numbers,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
