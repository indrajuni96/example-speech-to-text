import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colors } from '../../../utils'
import { ProssesSvg, TimeSvg, CampingSvg } from '../../../assets'
import Space from '../../space/space'

export default function CardLandingPage({ landingSvg, textTitle, textBody }) {
  return (
    <View style={styles.wrapperSnapImage}>

      { landingSvg === 'ProssesSvg' ? <ProssesSvg width={180} height={180} /> : null}
      { landingSvg === 'TimeSvg' ? <TimeSvg width={180} height={180} /> : null}
      { landingSvg === 'CampingSvg' ? <CampingSvg width={180} height={180} /> : null}

      <Space valSpace={20} />
      <Text style={styles.textTitleImage}>{textTitle}</Text>
      <Text style={styles.textTitleImage}>{textBody}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapperSnapImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitleImage: {
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
    fontSize: 15,
  }
})