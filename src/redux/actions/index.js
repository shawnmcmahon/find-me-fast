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

export const addStop = (routeId, stopId) => {
    return {
        type: 'ADD_STOP', 
        routeId,   
        stopId
        
    };
}

export const deleteStop = (routeId, stopId) => {
    return {
        type: 'DELETE_STOP', 
        routeId,
        stopId
    };
};