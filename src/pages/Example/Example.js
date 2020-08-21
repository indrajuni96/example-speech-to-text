import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Tts from 'react-native-tts';
import Voice from '@react-native-community/voice';

import { Space } from '../../components'
import { PoultryPng } from '../../assets'

export default function Example() {
  const [datas, setDatas] = useState({
    recognized: '',
    pitch: '',
    error: '',
    end: '',
    started: '',
    results: [],
    partialResults: [],
  })

  useEffect(() => {
    // Tts.setDefaultLanguage('ja_JP');
    Tts.setDefaultRate(0.1)

    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  const onSpek = async () => {
    await Tts.setDefaultLanguage('ja_JP');
    await Tts.setDefaultRate(0.3)
    Tts.speak('チキン')
    // チキン
  }

  const onSpeechStart = (e) => {
    console.log('onSpeechStart: ', e);
  };

  const onSpeechRecognized = (e) => {
    console.log('onSpeechRecognized: ', e);
  };

  const onSpeechEnd = (e) => {
    console.log('onSpeechEnd: ', e);
  };

  const onSpeechError = (e) => {
    console.log('onSpeechError: ', e);
  };

  const onSpeechResults = (e) => {
    console.log('onSpeechResults: ', e.value);

    setDatas({
      ...datas,
      ['results']: e.value
    })
  };

  const onSpeechPartialResults = (e) => {
    console.log('onSpeechPartialResults: ', e);
  };

  const onSpeechVolumeChanged = (e) => {
    console.log('onSpeechVolumeChanged: ', e);
  };

  const startRecord = async () => {
    console.log('onStartMicroPhone')

    setDatas({
      ...datas,
      ['results']: []
    })

    try {
      await Voice.start('ja_JP');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.textTitle}>What sound does this make?</Text>
        <Space valSpace={40} />

        <View style={styles.cardMain}>
          <Image
            style={styles.imageMain}
            source={PoultryPng}
          />

          <Space valSpace={20} />
          <Text style={[styles.textJapan, { fontSize: 19 }]}>チキン</Text>

          <Space valSpace={1} />
          <Text style={[styles.textJapan, { fontSize: 15 }]}>Chikin</Text>

          <View style={styles.wrapperBtnVolume}>
            <Icon name="volume-medium" size={30} color="white"
              onPress={onSpek} />
          </View>
        </View>

        <Space valSpace={25} />
        <TouchableOpacity
          style={[styles.btnOnCheck, { backgroundColor: '#ce2e6c' }]}
          onPress={startRecord}>
          <Text style={styles.textBtnCheck}>Speak</Text>
        </TouchableOpacity>

        {datas.results.map((result, index) => {
          return (
            <Text key={`result-${index}`} style={styles.stat}>
              {result}
            </Text>
          );
        })}

        <Text>
          {datas.results[0]}
        </Text>

        {/* <Space valSpace={10} />
        <TouchableOpacity
          style={[styles.btnOnCheck, { backgroundColor: '#f0f0f0', }]}
          onPress={() =>
            console.log('チキン')}>
          <Text style={styles.textBtnCheck}>Countinue</Text>
        </TouchableOpacity> */}

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
    // elevation: 3
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
