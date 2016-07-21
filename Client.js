import React from 'react'
import { render } from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'

import App from './App'

// Initialize state from global object
const initState = window.INIT_STATE
const store = createStore(reducers, initState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document
)
