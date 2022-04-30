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
  


})