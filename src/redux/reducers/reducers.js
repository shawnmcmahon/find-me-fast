const initialState = {
  routes: []
}

export const routesReducer = (state = initialState, action) => {
  switch(action.type) {
      case 'ADD_ROUTE':
          return [...state, {routeId: action.routeId}]
      case 'DELETE_ROUTE': 
          return state.routes.map((route, index) => {
              if (route.routeId !== action.routeId) {
                  return route
              }
              state.routes.splice(index, 1); 
              return state;
          })
      default: 
          return state
  }       
};

export const stopsReducer = (state = initialState, action) => {
  switch(action.type) {
      case 'ADD_STOP':
          return [...state, {routeId: action.routeId, stopId: action.stopId}]
      case 'DELETE_STOP': 
          return state.routes.map((route) => {
              if (route.routeId !== action.routeId) {
                  return route
              }
              const routeWithDeletedStop = route.stops.map((stop, stopIndex) => {
                if (stop.stopId !== action.stopId) {
                  return stop
                }
                // Not sure if it's stops or stop here
                route.stops.splice(stopIndex, 1)
                return state;
              })
              return routeWithDeletedStop;
          })
      default: 
          return state
  }       
};