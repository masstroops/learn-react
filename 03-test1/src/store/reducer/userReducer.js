export default function(state = {}, action) {
  switch (action.type) {
    case 'setuser':
      return action.info
    case 'clearuser':
      return null
    default:
      return state
  }
}