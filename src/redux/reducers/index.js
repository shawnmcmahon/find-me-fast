import { combineReducers } from 'redux'
import routes from './routes'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  routes,
  visibilityFilter
})
