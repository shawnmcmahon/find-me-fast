import React, { useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { setRoutes, addRoute, selectRoutes } from '../../app/features/routes/routeSlice';


export default function RouteList() {
  const routes = useSelector(selectRoutes);
  const dispatch = useDispatch(); 

  const mapRoutes = routes.map(route => {
    return (
      <li key={route.routeId}>Route: {route.routeId}</li>
    )
  });

  return (
    <div className="bg-slateGray h-screen w-full rounded-3xl">
      <ul>{mapRoutes}</ul>
    </div>
  )
}
