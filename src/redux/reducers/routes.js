import undoable from 'redu-undo'; 

const state = {
  routes: [{routeId: 1}, {routeId: 2}], 
  isLoading: false, 
  error: ''
};

const routes = (state = {
  routes: [{routeId: 1}, {routeId: 2}], 
  isLoading: false, 
  error: ''
}, action) => {
  switch (action.type) {
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
}


const undoableRoutes = undoable(routes); 

export default undoableRoutes; 