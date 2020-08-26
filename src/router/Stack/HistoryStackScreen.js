import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import { History } from '../../pages'

const HistoryStack = createStackNavigator()

export default function HistoryStackScreen() {
  return (
    <HistoryStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
      <HistoryStack.Screen name="History" component={History} />
    </HistoryStack.Navigator>
  )
}