import { StyleSheet } from 'react-native'
import { colors } from '../../utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperMain: {
    flex: 1
  },
  wrapperImage: {
    backgroundColor: colors.textDefault,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textName: {
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
    textAlign: 'center'
  },
  wrapperVersion: {
    flex: 0.1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 10,
    paddingRight: 10,
  },
  textVersion: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
  },
})

export default styles