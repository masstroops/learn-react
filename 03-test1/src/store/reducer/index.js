import { combineReducers } from 'redux'
import layoutReducer from './layoutReducer'
import userReducer from './userReducer'

const reducer = combineReducers({
  layout: layoutReducer,
  user: userReducer,
})

export default reducer