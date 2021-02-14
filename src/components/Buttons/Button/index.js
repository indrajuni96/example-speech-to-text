import React from 'react'
import {
  Text,
  View,
  Pressable,
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import { colors } from '../../../utils'

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

export default Button

Button.propTypes = {
  dark: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  opacity: PropTypes.number,
  onPress: PropTypes.func,
}