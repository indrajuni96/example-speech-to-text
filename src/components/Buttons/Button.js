import React from 'react'
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { colors } from '../../utils'
import { useMateri } from '../../context/MateriContext'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Button = ({ circle, disabled, onPress, name, opacity, ripple, dark }) => {
  const color = dark ? colors.white : colors.textDefault
  const colorRipple = dark ? colors.blueDark : colors.whiteDark
  const backgroundColor = dark ? colors.textDefault : colors.white

  const { openModal } = useMateri()

  if (circle) {
    const onPressable = () => {
      if (name == 'Materi') openModal()
      else onPress()
    }

    return (
      <View style={[styles.contentCircle, { backgroundColor, opacity }]}>
        <Pressable
          disabled={disabled}
          style={styles.pressableCircle}
          onPress={onPressable}
          android_ripple={{ color: colorRipple, opacity: 0.1 }}>
          <IconFontAwesome5 name="plus" style={styles.icon} />
        </Pressable>
      </View>
    )
  }

  return (
    <View style={[styles.content, { backgroundColor, opacity }]}>
      <Pressable
        disabled={disabled}
        style={styles.pressable}
        onPress={onPress}
        android_ripple={{ color: colorRipple, opacity: 0.1 }}>
        <Text style={[styles.text, { color }]}>{name}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    height: 55,
    borderWidth: 1,
    borderColor: colors.textDefault,
    borderRadius: 10,
    overflow: 'hidden',
  },
  pressable: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentCircle: {
    height: 55,
    width: 55,
    borderWidth: 1,
    borderColor: colors.textDefault,
    borderRadius: 50,
    overflow: 'hidden',
  },
  pressableCircle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
  },
  icon: {
    color: colors.white,
    fontSize: SCREEN_WIDTH * 0.08
  }
})

export default Button