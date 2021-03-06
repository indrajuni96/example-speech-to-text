import React from 'react'
import { View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

import styles from './styles'
import { colors } from '../../utils'

const Picker = ({ items, value, placeholder, onValueChange }) => {
  return (
    <View style={styles.content}>
      <RNPickerSelect
        items={items}
        value={value}
        placeholder={placeholder}
        onValueChange={onValueChange}
        style={{ inputAndroid: { color: colors.textDefault } }}
      />
    </View>
  )
}


export default Picker