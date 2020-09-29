import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'

import { colors } from '../../utils'

export default function Loading() {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color="white" />
      <Text style={styles.loading}>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  loading: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Roboto-Bold',
    marginTop: 20
  }
})
