import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  wrapperCard: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: colors.border,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 10,
    flexDirection: 'row',
  },
  btnPlay: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 40,
    height: 40,
    backgroundColor: colors.textDefault,
    borderRadius: 20,
  },
  wrapperCardText: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20
  },
  textJapanes: {
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
  },
  textRomaji: {
    fontSize: 11,
    fontFamily: 'Roboto-Regular',
    color: colors.textDefault,
  },
})

export default styles