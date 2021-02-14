import React from 'react'
import {
  View,
  Pressable,
} from 'react-native'
import PropTypes from 'prop-types'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import styles from './styles'
import { colors } from '../../../utils'
import { useMateri } from '../../../context/MateriContext'

const Fab = ({ dark, disabled, name, opacity, onPress }) => {
  const colorRipple = dark ? colors.blueDark : colors.whiteDark
  const backgroundColor = dark ? colors.textDefault : colors.white

  const { openModal } = useMateri()

  const onPressable = () => {
    if (name == 'Materi') {
      openModal()
    }
    else onPress()
  }

  return (
    <View style={[styles.content, { backgroundColor, opacity }]}>
      <Pressable
        disabled={disabled}
        style={styles.pressable}
        onPress={onPressable}
        android_ripple={{ color: colorRipple, opacity: 0.1 }}>
        <IconFontAwesome5 name="plus" style={styles.icon} />
      </Pressable>
    </View>
  )
}

export default Fab

Fab.propTypes = {
  dark: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  opacity: PropTypes.number,
  onPress: PropTypes.func,
}