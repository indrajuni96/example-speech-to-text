import React from 'react'
import { StatusBar, Text, View, TouchableNativeFeedback } from 'react-native'

import { Space } from '../../components'
import { colors, ConfigBackHandler } from '../../utils'
import { ProssesSvg } from '../../assets'
import styles from './styles'

export default function LandingPage({ navigation }) {
  ConfigBackHandler(navigation)

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          <Text style={styles.textKyoto}>Kyoto</Text>
        </View>
        {/* <Space valSpace={60} /> */}

        <View style={styles.wrapperSnapImage}>
          <ProssesSvg width={180} height={180} />

          <Space valSpace={20} />
          <Text style={styles.textTitleImage}>Aplikasi Belajar Online</Text>
          <Text style={styles.textTitleImage}>#PastiBisa</Text>
        </View>

        <View style={styles.wrapperButton}>
          <TouchableNativeFeedback>
            <View style={styles.btnMasuk}>
              <Text style={styles.textMasuk}>MASUK</Text>
            </View>
          </TouchableNativeFeedback>

          <Space valSpace={10} />

          <TouchableNativeFeedback>
            <View style={styles.btnDaftar}>
              <Text style={styles.textDaftar}>DAFTAR</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </>
  )
}