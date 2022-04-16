import React from 'react'
import Todo from './Todo'

const RouteList = ({ routes, toggleRoute }) => (
  <ul>
    {todos.map(route =>
      <Todo
        key={route.id}
        {...route}
        onClick={() => toggleRoute(route.id)}
      />
    )}
  </ul>
)



export default TodoList