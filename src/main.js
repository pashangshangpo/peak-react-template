import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './style/reset.scss'

import Route from './Route'
import RootReducer from '$reducers'

const Store = createStore(RootReducer)

class Main extends React.Component {
  render() {
    return (
      <>
        <Provider store={Store}>
          <Route />
        </Provider>
      </>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.body
)
