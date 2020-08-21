import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function space({ valSpace }) {
  return (
    <View style={styles.space(valSpace)} />
  )
}

const styles = StyleSheet.create({
  space: (value) => {
    return {
      height: value
    }
  }
})