import React from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import { toRomaji } from 'wanakana'
import IconIonicons from 'react-native-vector-icons/dist/Ionicons'

import styles from './styles'
import Space from '../../space/space'
import { PoultrySvg } from '../../../assets'

const CardCourse = ({ item, isBtnSpeak, onPress }) => {
  return (
    <View style={styles.cardMain}>
      <PoultrySvg width={210} height={200} />

      <Space height={20} />
      <Text style={[styles.textJapan, { fontSize: 19 }]}>{item}</Text>

      <Space height={1} />
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

export default CardCourse

CardCourse.propTypes = {
  item: PropTypes.string,
  isBtnSpeak: PropTypes.bool,
  onPress: PropTypes.func
}