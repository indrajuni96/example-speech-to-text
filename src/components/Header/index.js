import React from 'react'
import { StyleSheet, StatusBar, Text, View, TouchableOpacity } from 'react-native'
import IconFeather from 'react-native-vector-icons/dist/Feather'
import IconIonic from 'react-native-vector-icons/dist/Ionicons'

import { colors } from '../../utils'

export default function Header({ title, onPress, goBack }) {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={onPress}>
          {goBack ? (
            <IconIonic name="chevron-back-outline" size={30} color={colors.textDefault} />
          ) : (
              <IconFeather name="bar-chart-2" size={30} color={colors.textDefault} style={{ transform: [{ rotate: '90deg' }] }} />
            )}
        </TouchableOpacity>

        <View style={styles.wrapperText}>
          <Text style={styles.textHeader}>{title || ''}</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
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
  },
})