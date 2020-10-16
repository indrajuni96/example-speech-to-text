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
          <View style={styles.btnMasuk}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.textDefault, false)}>
              <View style={styles.wrapperText}>
                <Text style={styles.textMasuk}>MASUK</Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <Space valSpace={10} />

          <View style={styles.btnDaftar}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('white', false)}>
              <View style={styles.wrapperText}>
                <Text style={styles.textDaftar}>DAFTAR</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    </>
  )
}