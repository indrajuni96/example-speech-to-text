import { StyleSheet } from 'react-native'
import { colors } from '../../utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: 'white'
  },
  textTitle: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
  },
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
    backgroundColor: colors.buttonBlue,
    borderRadius: 20,
  },
  textBtnCheck: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    color: 'white',
    fontSize: 20,
  },
  btnOnCheck: {
    borderRadius: 15,
    paddingVertical: 8,
    borderColor: colors.border,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 3,
    // elevation: 3,
    // Color green #21bf73
  }
})

export default styles