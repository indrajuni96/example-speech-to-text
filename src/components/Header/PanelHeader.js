import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PanelHeader = () => {
  return (
    <View style={styles.panelHeader}>
      <View style={styles.panelHandle} />
    </View>
  )
}

const styles = StyleSheet.create({
  panelHeader: {
    paddingTop: 20,
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
})

export default PanelHeader