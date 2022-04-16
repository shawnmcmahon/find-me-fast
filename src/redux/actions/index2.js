let routeId = 0; 

export const addRoute = (routeId) = ({
  type: 'ADD_ROUTE', 
  routeId: routeId++, 
})


export const deleteRoute = (routeId) = ({
  type: 'DELETE_ROUTE', 
  routeId, 
})

export const toggleRoute = (routeId) => ({
  type: 'TOGGLE_ROUTES', 
  routeId
})

