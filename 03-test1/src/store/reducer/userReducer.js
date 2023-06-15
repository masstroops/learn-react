export default function(state = {
  token: null,
  userinfo: {},
}, action) {
  switch (action.type) {
    case 'getuser':
      let temp3 = localStorage.getItem('r_user')
      if (!temp3) return {
        token: null,
        userinfo: {},
      }
      return JSON.parse(temp3)
    case 'setuser':
      let temp = {
        ...state,
        userinfo: action.payload,
      }
      localStorage.setItem('r_user',JSON.stringify(temp))
      return temp
    case 'clearuser':
      localStorage.removeItem('r_user')
      return {
        token: null,
        userinfo: {},
      }
    case 'settoken':
      let temp2 = {
        ...state,
        token: action.payload,
      }
      localStorage.setItem('r_user',JSON.stringify(temp2))
      return temp2
    default:
      return state
  }
}