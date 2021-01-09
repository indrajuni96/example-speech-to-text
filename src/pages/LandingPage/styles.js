import { StyleSheet } from 'react-native'
import { colors } from '../../utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
  },
  wrapperMainSnapImage: {
    flex: 4,
    alignItems: 'center',
  },
  textKyoto: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
    fontSize: 25,
  },
  textTitleImage: {
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
    fontSize: 15,
  },
  pagination: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.textDefault,
  },
  wrapperButton: {
    flex: 1,
    justifyContent: 'flex-end',
  },
})

export default styles