import React, { useState, useCallback } from 'react'
import {
  View,
  Text,
  StatusBar,
} from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import {
  Space,
  Button,
  CardLandingPage,
} from '../../components'
import {
  dataDummy,
  debounce,
  ConfigBackHandler,
} from '../../utils'
import styles from './styles'

export default function LandingPage({ navigation }) {
  ConfigBackHandler(navigation)
  const [activeSlide, setActiveSlide] = useState(0)

  const onLogin = useCallback(debounce(() => {
    navigation.navigate('Login')
  }, 1000), [])

  const onRegister = useCallback(debounce(() => {
    navigation.navigate('Register')
  }, 1000), [])

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
            onPress={onLogin} />

          <Space valSpace={10} />

          <Button
            dark
            ripple
            name="DAFTAR"
            onPress={onRegister} />
        </View>
      </View>
    </>
  )
}