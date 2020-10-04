import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

import { colors } from '../../../utils'

export default function Input({ label, value, onChangeText, onBlur, secureTextEntry, errors, touched }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, { borderColor: errors && touched ? colors.buttonGreen : colors.border }]}
        value={value}
        onBlur={onBlur}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12
  },
  label: {
    fontSize: 16,
    color: colors.textDefault,
    marginBottom: 6,
    fontFamily: 'Roboto-Regular',
  }
})