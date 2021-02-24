import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Tts from 'react-native-tts';
import { toRomaji } from 'wanakana';
import Voice from '@react-native-community/voice';

import {
  Space,
  ModalGame,
  CardCourse,
} from '../../components';
import styles from './styles';
import { colors } from '../../utils';
import { getTranslate } from '../../helpers'

export default function Example({ route, navigation }) {
  const [datas, setDatas] = useState({
    results: [''],
  })
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isBtnSpeak, setIsBtnSpeak] = useState(false)
  const [isQuestion, setIsQuestion] = useState(false)
  const quiz = route.params.item

  useEffect(() => {
    Tts.getInitStatus().then(initTs())

    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      console.log('EXAMPLE WILL UN MOUNT')
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  const toggleModal = (val) => {
    setIsModalVisible(val)
  }

  const initTs = async () => {
    await Tts.setDefaultLanguage('ja');
    await Tts.setDefaultRate(0.3)
  }

  const onSpek = async () => {
    Tts.stop()
    Tts.speak(quiz)
  }

  const onSpeechStart = (e) => {
    console.log('onSpeechStart: ', e);
  };

  const onSpeechEnd = (e) => {
    console.log('onSpeechEnd: ', e);
  };

  const onSpeechError = (e) => {
    console.log('onSpeechError: ', e);
    toggleModal(true)
    setIsBtnSpeak(false)
    setIsQuestion(false)
  };

  // const onSpeechResults = (e) => {
  //   // console.log('onSpeechResults: ', e.value);

  //   // split string to array
  //   let questionArray = quiz.split(' ')
  //   // console.log(questionArray)

  //   // japanes to romaji
  //   let questionRomaji = []
  //   let answerRomaji = []

  //   questionArray.forEach(value => questionRomaji.push(toRomaji(value)))
  //   e.value.forEach(value => answerRomaji.push(toRomaji(value)))
  //   // console.log(questionRomaji)
  //   console.log(answerRomaji)

  //   const countValueQestion = countValueArray(questionRomaji)
  //   const countValueAnswer = countValueArray(answerRomaji)
  //   // console.log(countValueQestion)
  //   // console.log(countValueAnswer)

  //   let resultIn = []
  //   let resultOut = []

  //   answerRomaji.forEach(value => {
  //     let countValueResIn = countValueArray(resultIn)

  //     if (questionRomaji.includes(value)) {
  //       if (countValueResIn.value) {
  //         if (countValueResIn.value < countValueQestion.value) {
  //           resultIn.push(value)
  //         }
  //       } else {
  //         if (!resultIn.includes(value)) {
  //           resultIn.push(value)
  //         }
  //       }
  //     }
  //   })

  //   console.log(resultIn)

  //   if (resultIn.length > 0) {
  //     console.log('BENAR')
  //     setIsQuestion(true)
  //   } else {
  //     console.log('salah')
  //     setIsQuestion(false)
  //   }
  //   toggleModal(true)

  //   // setDatas({
  //   //   ...datas,
  //   //   ['results']: resultRomaji
  //   // })

  //   setIsBtnSpeak(false)
  // };

  const onSpeechResults = async (event) => {
    try {
      // apabila  hiraga/katakana ada dua kalimat
      // const questionArray = quiz.split(' ')

      // event.value diambil yg pertama
      const response = await getTranslate('translate', {
        "mode": "spaced",
        "convert": "romaji",
        "japanese": event.value[0]
      })
      // console.log(toRomaji(quiz))
      // console.log(response.data.result)

      if (response.code === 200) {
      }

    } catch (error) {
      console.log(error)
    }

    toggleModal(true)
    setIsBtnSpeak(false)
  }

  const startRecord = async () => {
    console.log('onStartMicroPhone')

    setIsBtnSpeak(true)
    setDatas({
      ...datas,
      ['results']: []
    })

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

  const onExampleFun = () => {
    console.log('function example')
    // deklarasi nilai pertama
    // variable answer (di ganti sama voice result)
    // let question = "おかえりなさい"
    let answer = ["おはようございます", "チキン", "どんな", "もんだいない", "チキン", "どんな", "チキン"]

    // split string to array
    let questionArray = quiz.split(' ')
    // console.log(questionArray)

    // japanes to romaji
    let questionRomaji = []
    let answerRomaji = []

    questionArray.forEach(value => questionRomaji.push(toRomaji(value)))
    answer.forEach(value => answerRomaji.push(toRomaji(value)))
    // console.log(questionRomaji)
    // console.log(answerRomaji)

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

    console.log(resultIn)
  }

  const onPressButtonModal = () => {
    toggleModal(false)

    setTimeout(() => {
      navigation.goBack()
    }, 2000)
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
        <Space valSpace={40} />

        <CardCourse item={quiz} isBtnSpeak={isBtnSpeak} onPress={onSpek} />
        <Space valSpace={25} />

        <TouchableOpacity
          disabled={isBtnSpeak ? true : false}
          style={[styles.btnOnCheck, { backgroundColor: isBtnSpeak ? colors.greenDark : colors.redDark }]}
          onPress={startRecord}>
          <Text style={styles.textBtnCheck}>{isBtnSpeak ? "Speak" : "Start"}</Text>
        </TouchableOpacity>

        {/* {datas.results.map((result, index) => {
          return (
            <Text key={`result - ${ index } `} style={styles.stat}>
              {toRomaji(result)}
            </Text>
          );
        })} */}

      </ScrollView>
    </View >
  )
}