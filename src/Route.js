import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { El } from 'react-util'

import Home from './router/home'

class Routes extends React.Component {
  renderRouters() {
    return El(Switch,
      {},
      El(Route,
        {
          exact: true,
          path: '/',
          component: Home,
        }
      )
    )
  }

  render() {
    return El(HashRouter,
      {},
      this.renderRouters()
    )
  }
}

export default Routes
