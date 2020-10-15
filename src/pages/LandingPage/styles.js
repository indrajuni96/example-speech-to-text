import { StyleSheet } from 'react-native'
import { colors } from '../../utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
  },
  wrapperSnapImage: {
    flex: 3,
    justifyContent: 'center',
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
  wrapperButton: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  btnMasuk: {
    borderWidth: 1,
    borderColor: colors.textDefault,
    borderRadius: 10,
    paddingVertical: 8,
  },
  textMasuk: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
    fontSize: 18,
  },
  btnDaftar: {
    backgroundColor: colors.textDefault,
    borderRadius: 10,
    paddingVertical: 8,
  },
  textDaftar: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    color: 'white',
    fontSize: 18,
  }
})

export default styles