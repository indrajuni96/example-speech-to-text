import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  wrapperCard: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingVertical: 10,
  },
  textMenu: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: colors.textDefault,
  },
  cardText: {
    flex: 1,
    marginLeft: 20,
    alignSelf: 'center',
    borderBottomColor: colors.textDefault,
    borderBottomWidth: 0.5
  }
})

export default styles