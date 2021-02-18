import React from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { toRomaji } from 'wanakana';
import IconIonicons from 'react-native-vector-icons/dist/Ionicons';

import styles from './styles'
import Space from '../../space/space'

const CardLearning = ({ textJapan, onPress }) => {
  return (
    <>
      <Space valSpace={10} />
      <TouchableOpacity onPress={onPress}>
        <View style={styles.wrapperCard}>
          <View style={styles.btnPlay}>
            <IconIonicons name="play" size={25} color="white" />
          </View>

          <View style={styles.wrapperCardText}>
            <Text style={styles.textJapanes}>{textJapan}</Text>
            <Text style={styles.textRomaji}>{toRomaji(textJapan)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}

export default CardLearning

CardLearning.propTypes = {
  landingSvg: PropTypes.string,
  textTitle: PropTypes.string,
  textBody: PropTypes.string
}