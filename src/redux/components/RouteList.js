import React from 'react'
import PropTypes from 'prop-types'
import Route from './Route'



// whats is this RouteOnClick?
const RouteList = ({routes}) => (
  <ul>
    {routes.map(route => {
      <Route
        key={route.routeId} 
        {...route}

      />
    })}
  </ul>
)

export default RouteList;