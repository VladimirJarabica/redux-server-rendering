import express from 'express'
import path from 'path'

import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import reducers from './reducers'

import App from './App'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  const initState = {value: 'This is init state of my application'}

  const store = createStore(reducers, initState)

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  res.send(html)
})

const port = 3000

app.listen(port, () => {
  console.log('App listen on port', port)
})
