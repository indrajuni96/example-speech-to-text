import { StyleSheet } from 'react-native'
import { colors } from '../../utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  wrapperMain: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 15
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