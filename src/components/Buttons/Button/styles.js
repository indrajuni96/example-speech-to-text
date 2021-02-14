import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

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

export default styles