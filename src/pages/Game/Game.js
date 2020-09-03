import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import { randomItem, removeItem } from '../../redux/actions/item';
import { ConfigBackHandler } from '../../utils'

export default function Game({ navigation }) {
  const [isFinish, setIsFinish] = useState(false)

  const dispatch = useDispatch()
  const items = useSelector((state) => state.itemStore)

  ConfigBackHandler(navigation)

  useEffect(() => {
    dispatch(randomItem())
  }, [])

  const onPressRandom = () => {
    if (items.items.length == 1) {
      console.log('SELESAI')
      setIsFinish(true)
    } else {
      dispatch(removeItem(items.currentItem))
      navigation.push('Game')
    }
  }

  return (
    <View style={styles.container}>
      <Text>{items.currentItem}</Text>
      <Button
        disabled={isFinish}
        title={isFinish ? "FINISH" : "RANDOM"}
        onPress={onPressRandom} />
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
