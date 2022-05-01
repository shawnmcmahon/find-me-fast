import React from 'react'; 

export const Route = ({routeId}) => {
  return (
    <li className="text-black bg-white max-w-sm w-full h-24 m-5 rounded-md text-left p-3">
      <p className="flex flex-row">Route: {routeId}</p>
    </li>
  )

};