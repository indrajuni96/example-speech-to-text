import 'react-native-gesture-handler';
import React from 'react'
import { Provider } from 'react-redux'
import FlashMessage from "react-native-flash-message";
import { PersistGate } from 'redux-persist/integration/react'

import Routers from './router/Routers'
import { Store, Persistor } from './redux/store'

export default function App() {
  return (
    <>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <Routers />
        </PersistGate>
      </Provider>
      <FlashMessage position="top" />
    </>
  )
}