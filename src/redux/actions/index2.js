let nextRouteId = 0; 

export const addRoute = text = ({
  type: 'ADD_ROUTE', 
  routeId: nextRouteId++, 
})


export const deleteRoute = text = ({
  type: 'DELETE_ROUTE', 
  routeId, 
})

export const toggleRoute = id => ({
  type: 'TOGGLE_ROUTES', 
  routeId
})

