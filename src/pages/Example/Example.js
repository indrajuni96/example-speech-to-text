import Voice from '@react-native-community/voice';
import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import RNPermissions, { PERMISSIONS, RESULTS } from 'react-native-permissions';
import Tts from 'react-native-tts';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { toRomaji } from 'wanakana';

import { PoultrySvg } from '../../assets';
import { ModalExample, Space, CardCourse } from '../../components';
import { colors } from '../../utils';
import styles from './styles';


export default function Example({ route, navigation }) {
  const [datas, setDatas] = useState({
    results: [''],
  })
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isBtnSpeak, setIsBtnSpeak] = useState(false)
  const [isQuestion, setIsQuestion] = useState(false)
  const [isPermission, setIsPermission] = useState(false)
  const quiz = route.params.item

  useEffect(() => {
    requestPermission(PERMISSIONS.ANDROID.RECORD_AUDIO)
    Tts.getInitStatus().then(initTs())

    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  const requestPermission = (PERMISSIONS_VALUES) => {
    RNPermissions.request(PERMISSIONS_VALUES)
      .then(() => checkPermissions(PERMISSIONS_VALUES))
      .catch(error => console.log(error))
  }

  const checkPermissions = (PERMISSIONS_VALUES) => {
    RNPermissions.check(PERMISSIONS_VALUES)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            setIsPermission(true)
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
  }

  const toggleModal = (val) => {
    setIsModalVisible(val)
  }

  const initTs = async () => {
    await Tts.setDefaultLanguage('ja');
    await Tts.setDefaultRate(0.3)
  }

  const onSpek = async () => {
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

  const onSpeechResults = (e) => {
    console.log('onSpeechResults: ', e.value);
    let resultRomaji = []
    // let quizRomaji = toRomaji(quiz)

    e.value.forEach(result => {
      if (quiz.includes(result)) {
        resultRomaji.push(toRomaji(result))
      }
      resultRomaji.push(toRomaji(result))
    });


    if (resultRomaji.length > 0) {
      console.log('BENAR')
      setIsQuestion(true)
    } else {
      console.log('salah')
      setIsQuestion(false)
    }
    toggleModal(true)

    setDatas({
      ...datas,
      ['results']: resultRomaji
    })
    setIsBtnSpeak(false)
  };

  const startRecord = async () => {
    console.log('onStartMicroPhone')

    if (isPermission) {
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
    } else {
      requestPermission(PERMISSIONS.ANDROID.RECORD_AUDIO)
    }

  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <ModalExample
        isModalVisible={isModalVisible}
        toggleModal={() => toggleModal(false)}
        isQuestion={isQuestion}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.textTitle}>What sound does this make?</Text>
        <Space valSpace={40} />

        <CardCourse item={quiz} isBtnSpeak={isBtnSpeak} onPress={onSpek} />
        <Space valSpace={25} />

        <TouchableOpacity
          disabled={isBtnSpeak ? true : false}
          style={[styles.btnOnCheck, { backgroundColor: isBtnSpeak ? colors.buttonRed : colors.buttonGreen }]}
          onPress={startRecord}>
          <Text style={styles.textBtnCheck}>{isBtnSpeak ? "Speak" : "Start"}</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => navigation.push("Example")}>
          <Text>Touch me</Text>
        </TouchableOpacity> */}

        {/* {datas.results.map((result, index) => {
          return (
            <Text key={`result-${index}`} style={styles.stat}>
              {toRomaji(result)}
            </Text>
          );
        })} */}

      </ScrollView>
    </View >
  )
}