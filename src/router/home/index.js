import React from 'react'
import { connect } from 'react-redux'
import { El } from 'react-util'

import { addLoad, removeLoad } from '$actions/home'

export default connect(
  state => {
    return {
      state
    }
  },
  dispatch => {
    return {
      dispatch
    }
  }
)(
  class extends React.Component {
    componentWillMount() {
      this.props.dispatch(addLoad())
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.props.dispatch(removeLoad())
      }, 2000)
    }
  
    renderLoad() {
      if (this.props.state.Home.load) {
        return 'Load'
      }
      
      return 'noLoad'
    }
  
    render() {
      return El(
        'div',
        {},
        this.renderLoad()
      )
    }
  }
)