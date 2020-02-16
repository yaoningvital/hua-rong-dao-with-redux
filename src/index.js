import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './containers/GameContainer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducer'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)