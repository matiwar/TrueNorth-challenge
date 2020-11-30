import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';


export default function configureStore(preloadedState) {
  return createStore(
    reducers,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  )
};