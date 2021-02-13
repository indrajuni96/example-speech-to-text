import React from 'react'
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native'
import PropTypes from 'prop-types'

import { colors } from '../../../utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Button = ({ dark, disabled, name, onPress, opacity }) => {
  const color = dark ? colors.white : colors.textDefault
  const colorRipple = dark ? colors.blueDark : colors.whiteDark
  const backgroundColor = dark ? colors.textDefault : colors.white

  return (
    <View style={[styles.content, { backgroundColor, opacity }]}>
      <Pressable
        disabled={disabled}
        style={styles.pressable}
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
  icon: {
    color: colors.white,
    fontSize: SCREEN_WIDTH * 0.08
  }
})

export default Button

Button.propTypes = {
  dark: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  opacity: PropTypes.number,
  onPress: PropTypes.func,
}