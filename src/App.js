import 'react-native-gesture-handler';
import React from 'react'
import { Provider } from 'react-redux'
import FlashMessage from "react-native-flash-message";

import Routers from './router/Routers'
import Store from './redux/store'

export default function App() {
  return (
    <>
      <Provider store={Store}>
        <Routers />
      </Provider>
      <FlashMessage position="top" />
    </>
  )
}