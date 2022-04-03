import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import AddRouteContainer from '../../redux/containers/AddRouteContainer';

import AddRoute from '../../redux/components/AddRoute'; 
import { connect } from 'react-redux'; 
import { addRoute } from '../../redux/actions/index';


function Home({routes, handleSubmit})  {
   
  useEffect(() => {
    console.log('home mounted');
    console.log(data)
    console.log('props', handleSubmit)
  });


  const data = useSelector((state) => state.routesReducer);

  let routeId;


  return (
      <div className="text-3xl font-bold underline">
        Home components???????????????
        <form id="routeId">
          <label>Add Route</label>
          <input type="text" id="routeId" value={routeId} placeholder="route-id"></input>
          <button type="submit" form="routeId" onClick={() => handleSubmit()}></button>
        </form>
      </div>
  )
}



const mapStateToProps = state => ({
  routes: state.routesReducer
});


const mapDispatchToProps = dispatch => ({
    // this handleSubmit is what is being expected to be return from the component it belongs to
    handleSubmit: (routeId) => {
      dispatch(addRoute(routeId))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)



