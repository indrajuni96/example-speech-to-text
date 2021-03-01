import React from 'react'
import { View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

import styles from './styles'
import { colors } from '../../utils'

const Picker = ({ items, onValueChange }) => {
  return (
    <View style={styles.content}>
      <RNPickerSelect
        items={items}
        placeholder={{ label: 'Pilih kategori...', value: null }}
        style={{ inputAndroid: { color: colors.textDefault } }}
        onValueChange={onValueChange}
      />
    </View>
  )
}


export default Picker