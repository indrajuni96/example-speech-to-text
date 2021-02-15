import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  cardMain: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: colors.border,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  textJapan: {
    fontFamily: 'Roboto-Regular',
    color: colors.textDefault,
  },
  wrapperBtnVolume: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: colors.blueLight,
    borderRadius: 20,
  },
})

export default styles