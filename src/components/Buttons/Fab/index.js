import React from 'react'
import {
  View,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { colors } from '../../../utils'
import { useMateri } from '../../../context/MateriContext'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Fab = ({ dark, disabled, name, opacity }) => {
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

const styles = StyleSheet.create({
  content: {
    height: 55,
    width: 55,
    borderWidth: 1,
    borderColor: colors.textDefault,
    borderRadius: 50,
    overflow: 'hidden',
  },
  pressable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: colors.white,
    fontSize: SCREEN_WIDTH * 0.08
  }
})

export default Fab