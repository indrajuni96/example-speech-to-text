import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-community/voice';

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
    console.log('did mount')

    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  const onSpeechRecognized = (event) => {
    console.log('onSpeechRecognized' + event)
  }

  return (
    <View style={styles.container}>
      <Text>Screen Voice {datas.recognized}</Text>
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
