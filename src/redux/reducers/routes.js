const routes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ROUTE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_ROUTE':
      return state.map(route =>
        (route.id === action.id)
          ? {...route, completed: !route.completed}
          : route
      )
    default:
      return state
  }
}

export default todos