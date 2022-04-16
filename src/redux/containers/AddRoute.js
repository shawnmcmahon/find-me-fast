import React from 'react'
import { connect } from 'react-redux'
import { addRoute } from '../actions'

const AddRoute = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addRoute(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Route
        </button>
      </form>
    </div>
  )
}

export default connect()(AddRoute)
