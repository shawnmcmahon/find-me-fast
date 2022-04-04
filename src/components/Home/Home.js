import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import AddRouteContainer from '../../redux/containers/AddRouteContainer';

import AddRoute from '../../redux/components/AddRoute'; 
import { connect } from 'react-redux'; 
import { addRoute } from '../../redux/actions/index';


function Home(props)  {
  const [testId, setTestId] = useState(0);
   
  useEffect(() => {
    console.log('home mounted');
    console.log(data)
    console.log('props', props)
  });


  const data = useSelector((state) => state.routes);

  let routeId;


  return (
      <div className="text-3xl font-bold underline">
        Home components???????????????
        <form id="routeId">
          <label>Add Route</label>
          <input type="text" id="routeId" placeholder="route-id"></input>
          <button type="submit" form="routeId"></button>
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
      console.log('routeId', routeId)
      dispatch(addRoute(routeId))
  }, 
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home



