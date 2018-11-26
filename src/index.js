import React from 'react'
import ReactDOM from 'react-dom'
import { El } from 'react-util'

import './style/reset.scss'

import Route from './Route'

class Main extends React.Component {
  render() {
    return El(Route)
  }
}

ReactDOM.render(
  El(Main),
  document.body.appendChild(document.createElement('div'))
)
