import React from 'react'
import {
  Text,
  View
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import Space from '../../space/space'
import { ProssesSvg, TimeSvg, CampingSvg } from '../../../assets'

const CardLandingPage = ({ landingSvg, textTitle, textBody }) => {
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

export default CardLandingPage

CardLandingPage.propTypes = {
  landingSvg: PropTypes.string,
  textTitle: PropTypes.string,
  textBody: PropTypes.string
}