const routes = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ROUTE':
            return [...state, {routeId: action.routeId}]
        case 'DELETE_ROUTE': 
            return state.map((route, index) => {
                if (route.routeId !== action.routId) {
                    return route
                }
                state.splice(index, 1); 
                return state;
            })
        default: 
            return state
    }       
};

export default routes;