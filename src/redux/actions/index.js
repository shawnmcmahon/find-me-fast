// State: 'allRoutes', actions: "ADD_ROUTE" 
// State: 'allRoutes', actions: "DELETE_ROUTE"
// State: 'singleRoute': action: "ADD_STOP" 
// State: 'singleRoute': action: "DELETE_STOP" 
export const addRoute = (routeId) => {
    return {
        type: 'ADD_ROUTE', 
        routeId
    };
};

export const deleteRoute = (routeId) => {
    return {
        type: 'DELETE_ROUTE', 
        routeId
    };
};

export const ADD_STOP = (stopId, routeId) => {
    return {
        type: 'ADD_STOP', 
        stopId,
        routeId
    };
}

export const DELETE_STOP = (stopId, routeId) => {
    return {
        type: 'DELETE_STOP', 
        stopId, 
        routeId
    };
};