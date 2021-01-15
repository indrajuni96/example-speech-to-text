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
    paddingHorizontal: 15
  }
})

export default styles
