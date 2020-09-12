import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import IconIonicons from 'react-native-vector-icons/dist/Ionicons'
import { toRomaji } from 'wanakana'

import { PoultrySvg } from '../../../assets'
import { colors } from '../../../utils'
import Space from '../../space/space'

export default function CardCourse({ item, isBtnSpeak, onPress }) {
  return (
    <View style={styles.cardMain}>
      <PoultrySvg width={210} height={200} />

      <Space valSpace={20} />
      <Text style={[styles.textJapan, { fontSize: 19 }]}>{item}</Text>

      <Space valSpace={1} />
      <Text style={[styles.textJapan, { fontSize: 15 }]}>{toRomaji(item)}</Text>

      <TouchableOpacity
        disabled={isBtnSpeak ? true : false}
        style={styles.wrapperBtnVolume}
        onPress={onPress}>
        <IconIonicons name="volume-medium" size={30} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  cardMain: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: colors.border,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  textJapan: {
    fontFamily: 'Roboto-Regular',
    color: colors.textDefault,
  },
  wrapperBtnVolume: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: colors.buttonBlue,
    borderRadius: 20,
  },
})