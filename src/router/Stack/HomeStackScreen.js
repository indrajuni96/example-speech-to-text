import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import { Example, ListLearning } from '../../pages'

const HomeStack = createStackNavigator()

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        // headerShown: false, 
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
      initialRouteName="ListLearning" >
      <HomeStack.Screen name="Example" component={Example} />
      <HomeStack.Screen name="ListLearning" component={ListLearning} />
    </HomeStack.Navigator >
  )
}