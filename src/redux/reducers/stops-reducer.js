const stops = (state = [], action) => {
  switch(action.type) {
      case 'ADD_STOP':
          return [...state, {routeId: action.routeId, stopId: action.stopId}]
      case 'DELETE_STOP': 
          return state.routes.map((route) => {
              if (route.routeId !== action.routeId) {
                  return route
              }
              route.stops.map((stop, stopIndex) => {
                if (stop.stopId !== action.stopId) {
                  return stop
                }
                state.routes.stop.splice(stopIndex, 1)
                return state;
              })
          })
      default: 
          return state
  }       
};

export default stops;