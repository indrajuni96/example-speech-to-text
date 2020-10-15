import React from 'react'
import { StatusBar, Text, View, TouchableNativeFeedback } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import { Space, CardLandingPage } from '../../components'
import { colors, ConfigBackHandler } from '../../utils'
import { ProssesSvg } from '../../assets'
import styles from './styles'

export default function LandingPage({ navigation }) {
  ConfigBackHandler(navigation)

  const dummyCarousel = [
    {
      landingSvg: 'ProssesSvg',
      textTitle: 'Aplikasi Belajar Online',
      textBody: '#PastiBisa'
    },
    {
      landingSvg: 'TimeSvg',
      textTitle: 'Waktu Belajar Kapanpun',
      textBody: '#Kapanpun'
    }
  ]

  const _renderItem = ({ item, index }) =>
    (
      <CardLandingPage
        landingSvg={item.landingSvg}
        textTitle={item.textTitle}
        textBody={item.textBody}
      />
    )


  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          <Text style={styles.textKyoto}>Kyoto</Text>
        </View>

        <View style={styles.wrapperSnapImage}>
          <Carousel
            // layout={"default"}
            data={dummyCarousel}
            renderItem={_renderItem}
            sliderWidth={500}
            itemWidth={500}
          // loop={true}
          // loopClonesPerSide={2}
          // autoplay={true}
          // autoplayDelay={500}
          // autoplayInterval={3000}
          />
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