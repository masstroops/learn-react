import { combineReducers } from 'redux'
import layoutReducer from './layoutReducer'
import menuReducer from './menuReducer'
import userReducer from './userReducer'

const reducer = combineReducers({
  layout: layoutReducer,
  user: userReducer,
  menu: menuReducer,
})

export default reducer