import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { El } from 'react-util'

import './style/reset.scss'

import Route from './Route'
import RootReducer from '$reducers'

const Store = createStore(RootReducer)

class Main extends React.Component {
  render() {
    return El(Route)
  }
}

ReactDOM.render(
  El(
    Provider,
    {
      store: Store
    },
    El(Main)
  ),
  document.body.appendChild(document.createElement('div'))
)
