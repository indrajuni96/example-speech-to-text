import React from 'react'
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import IconFeather from 'react-native-vector-icons/dist/Feather'
import IconIonic from 'react-native-vector-icons/dist/Ionicons'

import styles from './styles'
import { colors } from '../../utils'

const Header = ({ title, onPress, goBack }) => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={onPress}>
          {goBack ? (
            <IconIonic name="chevron-back-outline" size={30} color={colors.textDefault} />
          ) : (
              <IconFeather name="bar-chart-2" size={30} color={colors.textDefault} style={{ transform: [{ rotate: '90deg' }] }} />
            )}
        </TouchableOpacity>

        <View style={styles.wrapperText}>
          <Text style={styles.textHeader}>{title || ''}</Text>
        </View>
      </View>
    </>
  )
}

export default Header

Header.propTypes = {
  title: PropTypes.string,
  goBack: PropTypes.bool,
  onPress: PropTypes.func
}