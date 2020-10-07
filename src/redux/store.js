import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import AsyncStorage from '@react-native-community/async-storage'

import rootReducers from './reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducers)
const Store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(promise)))
const Persistor = persistStore(Store)

export { Store, Persistor }