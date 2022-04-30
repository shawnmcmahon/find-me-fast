import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { setRoutes, selectRoutes } from './routeSlice';

export const Routes = () => {
  const routes = useSelector(selectRoutes);
  const dispatch = useDispatch(); 
  console.log({routes})

  return (
    <div>

    </div>
  )

};