import { combineReducers } from "redux"
import user from '../features/login/reducers/user'

const reducers = combineReducers({
  user
})

const rootReducer = (state, action) => {

  return reducers(state, action)
}

export default rootReducer
