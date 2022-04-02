const routes = (state = [], action) => {
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

// export default routes;