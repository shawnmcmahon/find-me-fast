import React, { useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { setRoutes, addRoute, selectRoutes } from './routeSlice';
import RouteList from '../../../components/RouteList/RouteList';

export const Routes = () => {
  const routes = useSelector(selectRoutes);
  const dispatch = useDispatch(); 
  let [routeInput, setRouteInput] = useState(0);
  console.log({routes})


  const mapRoutes = routes.map(route => {
    return (
      <p key={route.routeId}>Route: {route.routeId}</p>
    )
  });

  return (
    <div>
    </div>
  )

};