import Voice from '@react-native-community/voice';
import React, { useEffect, useState } from 'react';
import { Button, PermissionsAndroid, StyleSheet, Text, View } from 'react-native';

export default function VoiceExample() {
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
    requestCameraPermission()
    onAllVoice()
  }, [])

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the Record Audio");
      } else {
        console.log("Record Audio permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const onAllVoice = () => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
  }

  const onSpeechStart = (e) => {
    console.log('onSpeechStart: ', e);
    // setDatas({
    //   ...datas,
    //   ['started']: e
    // })
  };

  const onSpeechRecognized = (e) => {
    console.log('onSpeechRecognized: ', e);
    // setDatas({
    //   ...datas,
    //   ['recognized']: e
    // })
  };

  const onSpeechEnd = (e) => {
    console.log('onSpeechEnd: ', e);
    // setDatas({
    //   ...datas,
    //   ['end']: e
    // })
  };

  const onSpeechError = (e) => {
    console.log('onSpeechError: ', e);

    setDatas({
      ...datas,
      recognized: '',
      pitch: '',
      error: '',
      end: '',
      started: '',
      results: [],
      partialResults: [],
    })
    setDatas({
      ...datas,
      ['error']: JSON.stringify(e.error)
    })
  };

  const onSpeechResults = (e) => {
    console.log('onSpeechResults: ', e);
    setDatas({
      ...datas,
      ['results']: e.value
    })
  };

  const onSpeechPartialResults = (e) => {
    console.log('onSpeechPartialResults: ', e);
    setDatas({
      ...datas,
      ['partialResults']: e.value
    })
  };

  const onSpeechVolumeChanged = (e) => {
    console.log('onSpeechVolumeChanged: ', e);
    setDatas({
      ...datas,
      ['pitch']: e.value
    })
  };

  const onStartMicroPhone = async () => {
    console.log('onStartMicroPhone')


    try {
      await Voice.start('in_ID');
      // await Voice.start('en-ID')
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.item}>Try permissions</Text>
      {/* <Icon.Button
        size={30}
        name="microphone"
        backgroundColor="#3b5998"
        onPress={onStartMicroPhone}
      >
        On Microphone
      </Icon.Button> */}
      <Button
        title="On Mic"
        onPress={onStartMicroPhone} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 10,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
})
