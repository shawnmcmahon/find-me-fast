import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import { Routes } from '../../app/features/routes/Routes';
import RouteList from '../RouteList/RouteList';


function Home()  {
  useEffect(() => {
   
  });

  const data = useSelector((state) => state.routes);

  return (
      <div className="text-2xl text-white text-center bg-darkBlue h-screen w-6/6">
        <p className="p-7">Home</p>
        <RouteList />
        <Footer />
      </div>
  )
}

export default Home;