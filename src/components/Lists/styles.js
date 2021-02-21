import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  ripple: {
    color: colors.whiteDark
  },
  content: {
    borderRadius: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderColor: colors.border,
    backgroundColor: colors.white,
    marginBottom: SCREEN_HEIGHT * 0.015,
    marginHorizontal: SCREEN_WIDTH * 0.035
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SCREEN_HEIGHT * 0.01,
    paddingHorizontal: SCREEN_WIDTH * 0.02,
  },
  contentIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.15,
    height: SCREEN_HEIGHT * 0.08,
    backgroundColor: colors.textDefault,
    borderRadius: 15
  },
  icon: {
    color: colors.white,
    fontSize: SCREEN_HEIGHT * 0.055,
  },
  text: {
    fontSize: SCREEN_HEIGHT * 0.025,
    fontFamily: 'Roboto-Medium',
    color: colors.textDefault,
  },
})

export default styles