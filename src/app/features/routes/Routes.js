import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { setRoutes, routeState } from './routeSlice';

export const Routes = () => {
  const routes = useSelector((state) => state);
  const dispatch = useDispatch(); 
  console.log({routes})

  return (
    <div>

    </div>
  )

};