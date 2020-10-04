import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colors } from '../../utils'
import Space from '../space/space'

export default function ErrorMessage({ touched, errors }) {
  if (touched && errors) {
    return (
      <View style={styles.wrapperError}>
        <Text style={styles.textError}>{errors}</Text>
      </View>
    )
  }

  return <Space valSpace={24} />
}

const styles = StyleSheet.create({
  wrapperError: {
    height: 24,
    marginLeft: 5,
    justifyContent: 'center'
  },
  textError: {
    fontSize: 11,
    fontFamily: 'Roboto-Bold',
    color: colors.buttonGreen,
  },
})