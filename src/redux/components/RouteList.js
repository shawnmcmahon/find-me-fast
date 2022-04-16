import React from 'react'
import Route from './Route'

const RouteList = ({ routes, toggleRoute }) => (
  <ul>
    {routes.map(route =>
      <Route
        key={route.id}
        {...route}
        onClick={() => toggleRoute(route.id)}
      />
    )}
  </ul>
)



export default RouteList