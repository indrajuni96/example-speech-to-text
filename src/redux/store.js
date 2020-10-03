import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from './reducers'

const Store = createStore(rootReducers, composeWithDevTools(applyMiddleware(promise)))

export default Store