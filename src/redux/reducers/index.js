import { combineReducers } from 'redux'

import itemReducer from './item'

const reducers = combineReducers({
  itemStore: itemReducer
})

export default reducers