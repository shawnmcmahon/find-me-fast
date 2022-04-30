import { createSlice } from '@reduxjs/toolkit'; 

const routeSlice = createSlice({
  name: 'route', 
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
    }
  }
})

const { actions, reducer } = routeSlice; 

export const { setLoading, setRoutes} = actions; 

export default reducer; 