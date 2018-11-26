import React from 'react'
import ReactDOM from 'react-dom'

import './style/reset.scss'

import Route from './Route'

class Main extends React.Component {
	render() {
		return El(Route)
	}
}

ReactDOM.render(
	<Main />,
	document.body.appendChild(document.createElement('div'))
)
