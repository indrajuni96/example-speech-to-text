import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import { randomItem } from '../../redux/actions/item';

export default function Game({ navigation }) {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.itemStore.currentItem)

  useEffect(() => {
    dispatch(randomItem())
  }, [])

  return (
    <View style={styles.container}>
      <Text>{items}</Text>
      <Button
        title="RANDOM"
        onPress={() => navigation.push('Game')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
