import React, { useState } from 'react'
import { StatusBar, Text, View, TouchableNativeFeedback } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { showMessage } from 'react-native-flash-message'

import { Space, CardLandingPage, Button } from '../../components'
import { colors, ConfigBackHandler, dataDummy } from '../../utils'
import { ProssesSvg } from '../../assets'
import styles from './styles'

export default function LandingPage({ navigation }) {
  ConfigBackHandler(navigation)
  const [activeSlide, setActiveSlide] = useState(0)

  const _renderItem = ({ item, index }) =>
  (
    <CardLandingPage
      landingSvg={item.landingSvg}
      textTitle={item.textTitle}
      textBody={item.textBody}
    />
  )

  const onSubmitDaftar = () => {
    navigation.navigate('Register')
    // showMessage({
    //   // message: 'Maaf fitur belum tersedia, untuk membantu pengembangan fitur ini bisa isi via "GOPAY" ke virtual account BCA "70001089502165963" untuk membeli COFFEE...',
    //   message: 'Fitur dalam pengerjaan...',
    //   type: "default",
    //   backgroundColor: colors.textDefault,
    //   duration: 5000
    // })
  }


  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          <Text style={styles.textKyoto}>Kyoto</Text>
        </View>

        <View style={styles.wrapperMainSnapImage}>
          <Carousel
            layout={"default"}
            data={dataDummy.landingPage}
            renderItem={_renderItem}
            sliderWidth={500}
            itemWidth={500}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            loop={true}
            loopClonesPerSide={2}
            autoplay={true}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={(item) => setActiveSlide(item)}
          />

          <Pagination
            dotsLength={dataDummy.landingPage.length}
            activeDotIndex={activeSlide}
            containerStyle={{ backgroundColor: 'white' }}
            dotStyle={styles.pagination}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>

        <View style={styles.wrapperButton}>
          <Button
            ripple
            name="MASUK"
            onPress={() => navigation.navigate('Login')} />

          <Space valSpace={10} />

          <Button
            ripple
            dark
            name="DAFTAR"
            onPress={onSubmitDaftar} />
        </View>
      </View>
    </>
  )
}