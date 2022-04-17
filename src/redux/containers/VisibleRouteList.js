import { connect } from 'react-redux'
import { toggleRoute } from '../actions'
import RouteList from '../components/RouteList'
import { VisibilityFilters } from '../actions/index'

const getVisibleRoutes = (routes, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return routes
    case VisibilityFilters.SHOW_COMPLETED:
      return routes.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return routes.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  routes: getVisibleRoutes(state.routes, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleRoute: id => dispatch(toggleRoute(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteList)