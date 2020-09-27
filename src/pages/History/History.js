import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import IconFeather from 'react-native-vector-icons/dist/Feather'

import styles from './styles'
import { colors, ConfigBackHandler } from '../../utils'

export default function History({ navigation }) {
  ConfigBackHandler(navigation)

  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <IconFeather name="bar-chart-2" size={30} color={colors.textDefault} style={{ transform: [{ rotate: '90deg' }] }} />
        </TouchableOpacity>

        <View style={styles.wrapperText}>
          <Text style={styles.textHeader}>History</Text>
        </View>
      </View>

    </View>
  )
}