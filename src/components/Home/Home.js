import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import { Routes } from '../../app/features/routes/Routes';


function Home()  {
  useEffect(() => {
   
  });

  const data = useSelector((state) => state.routes);

  return (
      <div className="text-2xl text-white text-center p-3 bg-darkBlue h-screen w-6/6">
        Home
        <Routes />
        <Footer />
      </div>
  )
}

export default Home;