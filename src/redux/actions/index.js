let nextRouteId = 0; 

export const addRoute = text => ({
  type: 'ADD_ROUTE',
  routeId: nextRouteId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = routeId => ({
  type: 'TOGGLE_ROUTE',
  routeId
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
