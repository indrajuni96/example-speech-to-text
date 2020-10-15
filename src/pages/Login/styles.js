import { StyleSheet } from 'react-native'
import { colors } from '../../utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30
  },
  wrapperTitle: {
    alignItems: 'center'
  },
  textLogin: {
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
    fontSize: 25,
  },
  textAccess: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: colors.textDefault,
  },
  wrapperMain: {
    flex: 1,
  },
  button: {
    backgroundColor: colors.textDefault,
    borderRadius: 10,
    paddingVertical: 8,
  },
  textButton: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    color: 'white',
    fontSize: 20,
  },
  wrapperDaftar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textBelum: {
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
    opacity: 0.5
  },
  textDaftar: {
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
  }
})

export default styles