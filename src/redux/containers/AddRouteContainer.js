import { connect } from 'react-redux'; 
import { addRoute } from '../actions';
import AddRoute from '../components/AddRoute'; 

const mapStateToProps = state => {
  return { routes: state.routesReducer }
};

const mapDispatchToProps = dispatch => {
  return {
    handleSumbit: (routeId) => {
      dispatch(addRoute(routeId))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRoute)