import { connect } from  'react-redux'; 
import { toggleRoute } from './actions/index2'; 
import RouteList from '../components/RouteList';

const getVisibleRoutes = (routes, filter) => {
  switch (filter) {
    case 'SHOW_ALL': 
      return routes
    default: 
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state = ({
  // what is the state.visibilityfilter?
  routes: getVisibleRoutes(state.routes, state.visibilityFilter) 
})

const mapDispatchToProps = ({
  onRouteClick: toggleRoute
})

const VisibleRouteList = connect(
  mapStateToProps, 
  mapDispatchToProps
)(RouteList)

export default VisibleRouteList