import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import IconFeather from 'react-native-vector-icons/dist/Feather'

import { colors, ConfigBackHandler } from '../../utils'


export default function Form({ navigation }) {
  ConfigBackHandler(navigation)

  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <IconFeather name="bar-chart-2" size={30} color={colors.textDefault} style={{ transform: [{ rotate: '90deg' }] }} />
        </TouchableOpacity>

        <View style={styles.wrapperText}>
          <Text style={styles.textHeader}>Form Example</Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  wrapperHeader: {
    height: 65,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textHeader: {
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
  },
  wrapperText: {
    flex: 1,
    alignItems: 'center',
    marginRight: 30
  }
})
