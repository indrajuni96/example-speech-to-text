import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { CustomDrawerContent } from '../../pages'
import { HomeStackScreen, HistoryStackScreen } from '../Stack'

const Drawer = createDrawerNavigator()

const optionsDrawer = ({ navigation }) => {
  // console.log(navigation.dangerouslyGetState().routes.[0].state);

  let isSwipeEnable = true
  // if (navigation.dangerouslyGetState().routes.[0].state !== undefined) {
  //   if (navigation.dangerouslyGetState().routes.[0].state.index > 0) isSwipeEnable = false
  //   else isSwipeEnable = true
  // }

  navigation.dangerouslyGetState().routes.[0].state !== undefined
    && navigation.dangerouslyGetState().routes.[0].state.index > 0
    ? isSwipeEnable = false
    : isSwipeEnable = true

  return {
    swipeEnabled: isSwipeEnable
  }
}

export const DrawerScreen = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeStackScreen}
        options={(navigation) => optionsDrawer(navigation)} />
      <Drawer.Screen
        name="History"
        component={HistoryStackScreen}
        options={(navigation) => optionsDrawer(navigation)} />
    </Drawer.Navigator>
  )
}