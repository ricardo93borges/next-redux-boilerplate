import {createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

export function initializeStore ({ initialState } = {}) {
  const enhancer = compose(applyMiddleware(thunk))
  const store = createStore(rootReducer, initialState, enhancer)
  return store
}