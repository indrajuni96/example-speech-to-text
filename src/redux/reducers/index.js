import { combineReducers } from 'redux'

import authReducer from './auth'
import itemReducer from './item'
import materiReducer from './materi'

const reducers = combineReducers({
  authStore: authReducer,
  itemStore: itemReducer,
  materiStore: materiReducer
})

export default reducers