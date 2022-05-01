import { createSlice } from '@reduxjs/toolkit'; 


const routeSlice = createSlice({
  name: 'routes', 
  initialState: {
    loading: false, 
    routes: [
      {routeId: 1}, 
      {routeId: 2}, 
      {routeId: 3}
    ]
  },
  reducers: {
    setLoading: (state) => {
      if (state.loading === false) {
        state.loading = true;
      };
    }, 
    setRoutes: (state, action) => {
      if (state.loading === true) {
        state.routes = action.payload
        state.loading = false;
      }; 
    }, 
    addRoute: (state, action) => {
      const route = {routeId: parseInt(action.payload)} 
      state.routes = [...state.routes, route]
    }
  }
})

const { actions, reducer } = routeSlice; 

export const { setLoading, setRoutes, addRoute } = actions; 

export const selectRoutes = (state) => state.routes.routes

export default reducer; 