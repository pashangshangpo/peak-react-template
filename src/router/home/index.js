import React from 'react'
import { connect } from 'react-redux'

export default connect(state => {
  return {
    state,
  }
})(
  class extends React.Component {
    render() {
      return <div>Home</div>
    }
  }
)
