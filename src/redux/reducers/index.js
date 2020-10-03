import { combineReducers } from 'redux'

import authReducer from './auth'
import itemReducer from './item'

const reducers = combineReducers({
  authStore: authReducer,
  itemStore: itemReducer
})

export default reducers