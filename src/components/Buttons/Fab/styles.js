import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

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

export default styles