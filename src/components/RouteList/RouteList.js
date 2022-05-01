import React, { useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { setRoutes, addRoute, selectRoutes } from '../../app/features/routes/routeSlice';
import { Route } from '../Route/Route';

export default function RouteList() {
  const routes = useSelector(selectRoutes);
  const dispatch = useDispatch(); 

  const mapRoutes = routes.map(route => {
    return (
      <Route 
        routeId={route.routeId}
      />
    )
  });

  return (
    <div className="bg-slateGray h-screen w-full rounded-3xl">
      <ul>{mapRoutes}</ul>
    </div>
  )
}
