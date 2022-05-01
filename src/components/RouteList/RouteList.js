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
      <h2 className="text-left text-black p-6 pl-12">Routes</h2>
      <ul className="flex flex-col justify-center items-center">{mapRoutes}</ul>
    </div>
  )
}
