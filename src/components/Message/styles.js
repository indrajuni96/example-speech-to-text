import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  wrapperError: {
    height: 24,
    marginLeft: 5,
    justifyContent: 'center'
  },
  textError: {
    fontSize: 11,
    fontFamily: 'Roboto-Bold',
    color: colors.redDark,
  }
})

export default styles