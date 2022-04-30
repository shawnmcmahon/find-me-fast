import React from 'react'
import { addRoute } from '../actions'

const AddRoute = () => {
  let input

  return (
    <div>
      <form onSubmit={e => {
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

export default AddRoute
