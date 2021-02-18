import React from 'react'
import {
  Text,
  View,
  Pressable
} from 'react-native'
import PropTypes from 'prop-types'
import IconFontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';

import styles from './styles'
import { colors } from '../../../utils'

const CardDrawerMenu = ({ name, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.wrapperCard}>
        <View>
          <IconFontAwesome5
            name="record-vinyl"
            size={30}
            color={colors.textDefault} />
        </View>

        <View style={styles.cardText}>
          <Text style={styles.textMenu}>{name}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default CardDrawerMenu

CardDrawerMenu.propTypes = {
  name: PropTypes.string,
  onPress: PropTypes.func
}