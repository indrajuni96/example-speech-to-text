import { StyleSheet } from 'react-native'
import { colors } from '../../utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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
    paddingHorizontal: 15,
  },
  scrollView: {
    paddingHorizontal: 15,
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
  }
})

export default styles