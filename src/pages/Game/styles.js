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