import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

import { colors } from '../../../utils'

export default function Input({ label }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
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