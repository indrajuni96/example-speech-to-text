import React, { useState, useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { optionsDrawer } from './config'
import { CustomDrawerContent } from '../../pages'
import { DashboardStackScreen, HistoryStackScreen, FormStackScreen, ProfileStackScreen } from '../Stack'

const Drawer = createDrawerNavigator()

export const DrawerScreen = () => {
  const [initRender, setInitRender] = useState(true)

  useEffect(() => {
    setInitRender(false);
  }, [initRender])

  return (
    <Drawer.Navigator drawerStyle={{ width: initRender ? null : "85%" }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        component={DashboardStackScreen}
        options={(navigation) => optionsDrawer(navigation)} />
      <Drawer.Screen
        name="History"
        component={HistoryStackScreen}
        options={(navigation) => optionsDrawer(navigation)} />
      <Drawer.Screen
        name="Form"
        component={FormStackScreen}
        options={(navigation) => optionsDrawer(navigation)} />
      <Drawer.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={(navigation) => optionsDrawer(navigation)} />
    </Drawer.Navigator>
  )
}