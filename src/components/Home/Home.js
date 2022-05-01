import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import AddRouteContainer from '../../redux/containers/AddRouteContainer';

// import AddRoute from '../../redux/components/AddRoute'; 
import Footer from '../Footer/Footer';
import { Routes } from '../../app/features/routes/Routes';


function Home(props)  {

  
  useEffect(() => {
   
  });


  const data = useSelector((state) => state.routes);



  return (
      <div className="text-3xl font-bold underline">
        Home components
        {/* <VisibleRouteList /> */}
        <Routes />
        <Footer />
      </div>
  )
}



// const mapStateToProps = state => ({
//   routes: state.routesReducer
// });


// const mapDispatchToProps = dispatch => ({
//     // this handleSubmit is what is being expected to be return from the component it belongs to
//     handleSubmit: (routeId) => {
//       console.log('routeId', routeId)
//       dispatch(addRoute(routeId))
//   }, 
// });

export default Home;
// export default Home



