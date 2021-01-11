import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

import { colors } from '../../utils'

const Button = ({ disabled, onPress, name, opacity, ripple, dark }) => {
  const color = dark ? colors.white : colors.textDefault
  const colorRipple = dark ? colors.blueDark : colors.whiteDark
  const backgroundColor = dark ? colors.textDefault : colors.white

  return (
    <View style={[styles.content, { backgroundColor }]}>
      <Pressable
        disabled={disabled}
        style={[styles.pressable, { opacity }]}
        onPress={onPress}
        android_ripple={{ color: colorRipple, opacity: 0.1 }}>
        <Text style={[styles.text, { color }]}>{name}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    height: 55,
    borderWidth: 1,
    borderColor: colors.textDefault,
    borderRadius: 10,
    overflow: 'hidden',
  },
  pressable: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
  },
})

export default Button