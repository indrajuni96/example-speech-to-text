import React from 'react'
import { View } from 'react-native'

import { Header } from '../../components'
import { ConfigBackHandler } from '../../utils'
import styles from './styles'

export default function History({ navigation }) {
  ConfigBackHandler(navigation)

  return (
    <View style={styles.container}>
      <Header
        onPress={() => navigation.toggleDrawer()}
        title="History"
      />
    </View>
  )
}