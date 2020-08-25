import { createStore } from 'redux'

import rootReducers from './reducers'

const Store = createStore(rootReducers)

export default Store