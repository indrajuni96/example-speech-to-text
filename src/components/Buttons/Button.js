import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

import { colors } from '../../utils'

const Button = ({ disabled, onPress, name, opacity }) => {
  return (
    <View style={styles.content}>
      <Pressable
        disabled={disabled}
        style={[styles.pressable, { opacity }]}
        onPress={onPress}
        android_ripple={styles.ripple}>
        <Text style={styles.text}>{name}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    height: 55,
    backgroundColor: colors.textDefault,
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
    color: 'white',
    fontSize: 20,
  },
  ripple: {
    color: colors.white
  },
})

export default Button