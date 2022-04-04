import { connect } from 'react-redux'; 
import { addRoute } from '../actions';
import AddRoute from '../components/AddRoute'; 
import Home from '../../components/Home/Home'

const mapStateToProps = state => ({
  routes: state.routesReducer
});


const mapDispatchToProps = dispatch => ({
    // this handleSubmit is what is being expected to be return from the component it belongs to
    handleSumbit: (routeId) => {
      dispatch(addRoute(routeId))
  }
});

export default connect(mapStateToProps)(Home)