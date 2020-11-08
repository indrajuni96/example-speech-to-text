import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import FlashMessage from "react-native-flash-message";
import { PersistGate } from 'redux-persist/integration/react'
import SplashScreen from 'react-native-splash-screen'

import Routers from './router/Routers'
import { Store, Persistor } from './redux/store'

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)
  }, [])

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