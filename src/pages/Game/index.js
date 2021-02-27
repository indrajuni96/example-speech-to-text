import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, StatusBar, TouchableOpacity, Text, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Tts from 'react-native-tts';
import Voice from '@react-native-community/voice';
import { toRomaji } from 'wanakana';

import { ModalGame, Space, CardCourse } from '../../components';
import { randomItem, removeItem } from '../../redux/actions/item';
import { colors, ConfigBackHandler } from '../../utils'
import styles from './styles';

export default function Game({ navigation }) {
  const [isFinish, setIsFinish] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isBtnSpeak, setIsBtnSpeak] = useState(false)
  const [isQuestion, setIsQuestion] = useState(false)
  let itemName

  const dispatch = useDispatch()
  const { id, items, item } = useSelector((state) => {
    itemName = state.itemStore.currentItem
    return ({
      id: state.itemStore.id,
      items: state.itemStore.items,
      item: state.itemStore.currentItem,
    })
  })

  ConfigBackHandler(navigation)

  useEffect(() => {
    dispatch(randomItem())

    Tts.getInitStatus().then(initTs())
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      console.log('EXAMPLE WILL UN MOUNT')
      Voice.destroy().then(Voice.removeAllListeners())
    }
  }, [])

  const initTs = async () => {
    await Tts.setDefaultLanguage('ja');
    await Tts.setDefaultRate(0.3)
  }

  const onSpek = async () => {
    Tts.speak(item)
  }

  const onSpeechStart = (e) => {
    console.log('onSpeechStart: ', toRomaji(itemName));
  };

  const onSpeechEnd = (e) => {
    console.log('onSpeechEnd: ', toRomaji(itemName));
  };

  const onSpeechError = (e) => {
    console.log('onSpeechError: ', toRomaji(itemName));
    toggleModal(true)
    setIsBtnSpeak(false)
    setIsQuestion(false)
  };

  const onSpeechResults = (e) => {
    // console.log('onSpeechResults: ', e.value);
    console.log('on speech result  ok:', toRomaji(itemName))
    // split string to array
    let questionArray = itemName.split(' ')
    // console.log(questionArray)

    // japanes to romaji
    let questionRomaji = []
    let answerRomaji = []

    questionArray.forEach(value => questionRomaji.push(toRomaji(value)))
    e.value.forEach(value => answerRomaji.push(toRomaji(value)))
    // console.log(questionRomaji)
    console.log(answerRomaji)

    const countValueQestion = countValueArray(questionRomaji)
    const countValueAnswer = countValueArray(answerRomaji)
    // console.log(countValueQestion)
    // console.log(countValueAnswer)

    let resultIn = []
    let resultOut = []

    answerRomaji.forEach(value => {
      let countValueResIn = countValueArray(resultIn)

      if (questionRomaji.includes(value)) {
        if (countValueResIn.value) {
          if (countValueResIn.value < countValueQestion.value) {
            resultIn.push(value)
          }
        } else {
          if (!resultIn.includes(value)) {
            resultIn.push(value)
          }
        }
      }
    })

    // console.log(resultIn)

    if (resultIn.length > 0) {
      console.log('BENAR')
      setIsQuestion(true)
    } else {
      console.log('salah')
      setIsQuestion(false)
    }
    toggleModal(true)

    // setDatas({
    //   ...datas,
    //   ['results']: resultRomaji
    // })

    setIsBtnSpeak(false)
  };

  const startRecord = async () => {
    console.log('onStartMicroPhone', toRomaji(item))

    setIsBtnSpeak(true)
    // setDatas({
    //   ...datas,
    //   ['results']: []
    // })

    try {
      await Voice.start('ja');
    } catch (error) {
      console.log(error)
    }
  }

  const countValueArray = (data) => {
    let counts = {}
    data.forEach(value => {
      counts[value] = (counts[value] || 0) + 1
    })

    return counts
  }

  const toggleModal = (val) => {
    setIsModalVisible(val)
  }

  const onPressButtonModal = () => {
    toggleModal(false)
    if (items.length == 1) {
      console.log('SELESAI')
      setIsFinish(true)
      setTimeout(() => {
        navigation.replace('ListLearning')
      }, 1000)
    } else {
      dispatch(removeItem(id))
      setTimeout(() => {
        navigation.replace('Game')
      }, 1000)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <ModalGame
        isModalVisible={isModalVisible}
        toggleModal={onPressButtonModal}
        isQuestion={isQuestion}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.textTitle}>What sound does this make?</Text>
        <Space height={40} />

        <CardCourse item={item} isBtnSpeak={isBtnSpeak}
          onPress={onSpek}
        />
        <Space height={25} />

        <TouchableOpacity
          disabled={isBtnSpeak ? true : false}
          style={[styles.btnOnCheck, { backgroundColor: isBtnSpeak ? colors.greenDark : colors.redDark }]}
          onPress={startRecord}>
          <Text style={styles.textBtnCheck}>{isBtnSpeak ? "Speak" : "Start"}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View >
  )
}