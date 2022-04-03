import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddRouteContainer from '../../redux/containers/AddRouteContainer';

export default function Home()  {
   
  useEffect(() => {
    console.log('home mounted');
  });


  const data = useSelector((state) => state.routesReducer);

  console.log(data)


  return (
      <div className="text-3xl font-bold underline">
        Home components???????????????
      </div>
  )
}



