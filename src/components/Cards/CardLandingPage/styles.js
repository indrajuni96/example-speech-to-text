import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  wrapperSnapImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitleImage: {
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
    fontSize: 15,
  }
})

export default styles