import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Tts from 'react-native-tts';
import Voice from '@react-native-community/voice';
import { toRomaji } from 'wanakana'
import { transliterate as tr } from 'transliteration';
import RNPermissions, { PERMISSIONS, RESULTS } from 'react-native-permissions';

import { Space, ModalExample } from '../../components'
import { PoultryPng } from '../../assets'

export default function Example() {
  const [datas, setDatas] = useState({
    recognized: '',
    pitch: '',
    error: '',
    end: '',
    started: '',
    results: [''],
    partialResults: [],
  })
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isBtnSpeak, setIsBtnSpeak] = useState(false)
  const [isQuestion, setIsQuestion] = useState(false)
  const [isPermission, setIsPermission] = useState(false)
  const [isBtnStart, setIsBtnStart] = useState(false)
  const quiz = 'なにしてるの'

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

        <View style={styles.cardMain}>
          <Image
            style={styles.imageMain}
            source={PoultryPng}
          />

          <Space valSpace={20} />
          <Text style={[styles.textJapan, { fontSize: 19 }]}>{quiz}</Text>

          <Space valSpace={1} />
          <Text style={[styles.textJapan, { fontSize: 15 }]}>{toRomaji(quiz)}</Text>

          <TouchableOpacity
            disabled={isBtnSpeak ? true : false}
            style={styles.wrapperBtnVolume}
            onPress={onSpek}>
            <Icon name="volume-medium" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <Space valSpace={25} />

        <TouchableOpacity
          disabled={isBtnSpeak ? true : false}
          style={[styles.btnOnCheck, { backgroundColor: isBtnSpeak ? '#78c800' : '#ce2e6c' }]}
          onPress={startRecord}>
          <Text style={styles.textBtnCheck}>{isBtnSpeak ? "Speak" : "Start"}</Text>
        </TouchableOpacity>

        {datas.results.map((result, index) => {
          return (
            <Text key={`result-${index}`} style={styles.stat}>
              {toRomaji(result)}
            </Text>
          );
        })}

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: 'white'
  },
  textTitle: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#222831',
  },
  cardMain: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#f0f0f0",
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  imageMain: {
    width: 210,
    height: 200
  },
  textJapan: {
    fontFamily: 'Roboto-Regular',
    color: '#222831',
  },
  wrapperBtnVolume: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#1089ff',
    borderRadius: 20,
  },
  textBtnCheck: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    color: 'white',
    fontSize: 20,
  },
  btnOnCheck: {
    borderRadius: 15,
    paddingVertical: 8,
    borderColor: "#f0f0f0",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 3,
    // elevation: 3,
    // Color green #21bf73
  }
})
