import React from 'react'

const Route = ({ onClick, completed, route }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {route}
  </li>
)



export default Route