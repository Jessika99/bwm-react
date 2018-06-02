import * as redux from 'redux';
import thunk from 'redux-thunk';

import { rentalsReducer, selectedRentalReducer } from './rental-reducer';

export const init = () => {
  const reducer = redux.combineReducers({
    rentals: rentalsReducer,
    rental: selectedRentalReducer
  });

  const store = redux.createStore(reducer, redux.applyMiddleware(thunk));

  return store;
};