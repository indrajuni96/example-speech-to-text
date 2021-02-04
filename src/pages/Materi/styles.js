import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  wrapperMain: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: SCREEN_WIDTH * 0.06,
    marginBottom: SCREEN_HEIGHT * 0.05
  }
})

export default styles
