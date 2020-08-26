import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
// import { createDrawerNavigator } from '@react-navigation/drawer'

import { Example, ListLearning, CustomDrawerContent, History } from '../pages'
import { DrawerScreen } from './Drawer'

// const Drawer = createDrawerNavigator()
const RootStack = createStackNavigator()
const HomeStack = createStackNavigator()
const HistoryStack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      // screenOptions={{
      //   // headerShown: false, 
      //   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      // }}
      // screenOptions={({ route, navigation }) => {
      //   console.log(navigation.dangerouslyGetState().routes.indexOf(route))
      //   return {
      //     gestureEnabled: false
      //   }
      // }}
      initialRouteName="ListLearning" >
      <HomeStack.Screen name="Example"
        component={Example}
      // options={({ navigation, route }) => console.log(route)} 
      />
      <HomeStack.Screen name="ListLearning" component={ListLearning} />
    </HomeStack.Navigator >
  )
}

const HistoryStackScreen = () => {
  return (
    <HistoryStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
      <HistoryStack.Screen name="History" component={History} />
    </HistoryStack.Navigator>
  )
}

// const optionsDrawer = ({ navigation }) => {
//   // console.log(navigation.dangerouslyGetState().routes.[0].state);

//   let isSwipeEnable = true
//   // if (navigation.dangerouslyGetState().routes.[0].state !== undefined) {
//   //   if (navigation.dangerouslyGetState().routes.[0].state.index > 0) isSwipeEnable = false
//   //   else isSwipeEnable = true
//   // }

//   navigation.dangerouslyGetState().routes.[0].state !== undefined
//     && navigation.dangerouslyGetState().routes.[0].state.index > 0
//     ? isSwipeEnable = false
//     : isSwipeEnable = true

//   return {
//     swipeEnabled: isSwipeEnable
//   }
// }

// const DrawerScreen = () => {
//   return (
//     <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
//       <Drawer.Screen
//         name="Home"
//         component={HomeStackScreen}
//         options={(navigation) => optionsDrawer(navigation)} />
//       <Drawer.Screen
//         name="History"
//         component={HistoryStackScreen}
//         options={(navigation) => optionsDrawer(navigation)} />
//     </Drawer.Navigator>
//   )
// }

// root stack and aur=th stack
const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode={false}>
      <RootStack.Screen name="App" component={DrawerScreen} />
    </RootStack.Navigator>
  )
}

export default function Routers() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  )
}