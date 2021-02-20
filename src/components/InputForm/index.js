import React from 'react'
import {
  Text,
  View,
  TextInput
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import { colors } from '../../utils'

const Input = ({ label, value, numeric, onChangeText, onBlur, secureTextEntry, errors, touched }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, { borderColor: errors && touched ? colors.redDark : colors.border }]}
        value={value}
        onBlur={onBlur}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={numeric && 'numeric'} />
    </View>
  )
}

export default Input

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  errors: PropTypes.string,
  goBack: PropTypes.bool,
  touched: PropTypes.bool,
  numeric: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func,
  onBlur: PropTypes.func,
}