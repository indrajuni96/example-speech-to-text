import React, { useState, useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { optionsDrawer } from './config'
import { CustomDrawerContent } from '../../pages'
import { HomeStackScreen, HistoryStackScreen, FormStackScreen } from '../Stack'

const Drawer = createDrawerNavigator()

export const DrawerScreen = () => {
  const [initRender, setInitRender] = useState(true)

  useEffect(() => {
    setInitRender(false);
  }, [initRender])

  return (
    <Drawer.Navigator drawerStyle={{ width: initRender ? null : "90%" }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeStackScreen}
        options={(navigation) => optionsDrawer(navigation)} />
      <Drawer.Screen
        name="History"
        component={HistoryStackScreen}
        options={(navigation) => optionsDrawer(navigation)} />
      <Drawer.Screen
        name="Form"
        component={FormStackScreen}
        options={(navigation) => optionsDrawer(navigation)} />
    </Drawer.Navigator>
  )
}