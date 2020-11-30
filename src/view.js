import React from 'react'
import { renderToString } from 'react-dom/server'

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/App'

module.exports = function render(initialState) {
  const store = configureStore(initialState)

  const content = renderToString(
    <Provider store={store} >
       <App />
    </Provider>
  );

  const preloadedState = store.getState()

  return { content, preloadedState };
}
