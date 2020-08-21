import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { isKana, isHiragana, isKatakana, isKanji, toRomaji } from 'wanakana';

export default function Trranslate() {

  useEffect(() => {
    // bapuk
    // if (isKana('げーむ')) {
    //   console.log('is Kana')
    // }

    if (isHiragana('チキン')) {
      console.log('is Hiragana')
    }

    if (isKatakana('チキン')) {
      console.log('is Katakana')
    }

    if (isKanji('チキン')) {
      console.log('is Kanji')
    }
  }, [])

  return (
    <View style={styles.conatiner}>
      <Text>To Romaji {toRomaji('チキン')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
