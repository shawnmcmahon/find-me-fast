import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import AddRouteContainer from '../../redux/containers/AddRouteContainer';

// import AddRoute from '../../redux/components/AddRoute'; 
import { connect } from 'react-redux'; 
// import { addRoute } from '../../redux/actions/index';
// import VisibleRouteList from '../../redux/containers/VisibleRouteList';
import AddRoute from '../../redux/containers/AddRoute'; 
import VisibleRouteList from '../../redux/containers/VisibleRouteList';


function Home(props)  {

  
  useEffect(() => {
   
  });


  const data = useSelector((state) => state.routes);

  let routeId;


  return (
      <div className="text-3xl font-bold underline">
        Home components
        <AddRoute />
        <VisibleRouteList />
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

export default (Home)
// export default Home



