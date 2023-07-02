export default function(state = {
  menu: []
}, action) {
  switch(action.type) {
    case 'getmenu':
      return state.menu
    case 'setmenu':
      {
        let temp = {
          ...state,
          menu: action.payload,
        }
        return temp
      }
    default:
      return state
  }
}