import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, StatusBar, TouchableOpacity, Text, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Tts from 'react-native-tts';

import { ModalExample, Space, CardCourse } from '../../components';
import { randomItem, removeItem } from '../../redux/actions/item';
import { colors, ConfigBackHandler } from '../../utils'
import styles from './styles';

export default function Game({ navigation }) {
  const [isFinish, setIsFinish] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isBtnSpeak, setIsBtnSpeak] = useState(false)
  const [isQuestion, setIsQuestion] = useState(false)

  const dispatch = useDispatch()
  const items = useSelector((state) => state.itemStore)

  ConfigBackHandler(navigation)

  useEffect(() => {
    dispatch(randomItem())

    Tts.getInitStatus().then(initTs())
  }, [])

  const onPressRandom = () => {
    if (items.item.length == 1) {
      console.log('SELESAI')
      setIsFinish(true)
    } else {
      dispatch(removeItem(items.id))
      navigation.push('Game')
    }
  }

  const initTs = async () => {
    await Tts.setDefaultLanguage('ja');
    await Tts.setDefaultRate(0.3)
  }

  const onSpek = async () => {
    Tts.speak(items.currentItem)
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <ModalExample
        isModalVisible={isModalVisible}
        // toggleModal={onPressButtonModal}
        isQuestion={isQuestion}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.textTitle}>What sound does this make?</Text>
        <Space valSpace={40} />

        <CardCourse item={items.currentItem} isBtnSpeak={isBtnSpeak}
          onPress={onSpek}
        />
        <Space valSpace={25} />

        <TouchableOpacity
          disabled={isBtnSpeak ? true : false}
          style={[styles.btnOnCheck, { backgroundColor: isBtnSpeak ? colors.buttonRed : colors.buttonGreen }]}
          onPress={onPressRandom}>
          <Text style={styles.textBtnCheck}>{isBtnSpeak ? "Speak" : "Start"}</Text>
        </TouchableOpacity>

      </ScrollView>
    </View >
  )
}