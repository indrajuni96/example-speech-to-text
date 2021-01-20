import React from 'react'
import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import IconIonicons from 'react-native-vector-icons/Ionicons'

import Space from '../space/space'
import { colors } from '../../utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const List = ({ onPress, kata }) => {
  return (
    <View style={styles.content}>
      <Pressable
        style={styles.pressable}
        android_ripple={styles.ripple}
        onPress={onPress}>
        <View style={styles.contentIcon}>
          <IconIonicons name="cube-sharp" style={styles.icon} />
        </View>

        <Space width={20} />

        <View>
          <Text style={styles.text}>{kata.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  ripple: {
    color: colors.whiteDark
  },
  content: {
    borderRadius: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    marginBottom: SCREEN_HEIGHT * 0.015,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SCREEN_HEIGHT * 0.01,
    paddingHorizontal: SCREEN_WIDTH * 0.02,
  },
  contentIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.15,
    height: SCREEN_HEIGHT * 0.08,
    backgroundColor: colors.textDefault,
    borderRadius: 15
  },
  icon: {
    color: colors.white,
    fontSize: SCREEN_HEIGHT * 0.055,
  },
  text: {
    fontSize: SCREEN_HEIGHT * 0.025,
    fontFamily: 'Roboto-Medium',
    color: colors.textDefault,
  },
})

export default List
