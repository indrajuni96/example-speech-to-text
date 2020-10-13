import { StyleSheet } from 'react-native'
import { colors } from '../../utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  wrapperHeader: {
    height: 65,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textHeader: {
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
  },
  wrapperText: {
    flex: 1,
    alignItems: 'center',
    marginRight: 30
  },
  wrapperMain: {
    flex: 1,
    paddingHorizontal: 15,
  },
  cardProfile: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.textDefault,
    paddingBottom: 2,
  },
  textTitle: {
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
  },
  textValue: {
    fontSize: 14,
    fontFamily: 'Regular-Bold',
    color: colors.textDefault,
    opacity: 0.6
  }
})

export default styles