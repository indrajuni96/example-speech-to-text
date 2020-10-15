import React from 'react'
import { StyleSheet, StatusBar, Text, View, ActivityIndicator } from 'react-native'

import { colors } from '../../utils'

export default function Loading({ splash }) {
  const color = splash ? colors.textDefault : 'white'
  const backgroundColor = splash ? 'white' : 'rgba(0,0,0,0.5)'
  const text = splash ? 'Please wait...' : 'Loading...'

  return (
    <>
      {splash && <StatusBar backgroundColor="white" barStyle="dark-content" />}
      <View style={[styles.wrapper, { backgroundColor }]}>
        <ActivityIndicator size="large" color={color} />
        <Text style={[styles.loading, { color }]}>{text}</Text>
      </View>
    </>
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
  },
  loading: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    marginTop: 20
  }
})
