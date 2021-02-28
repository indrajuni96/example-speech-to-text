import { StyleSheet, Dimensions, StatusBar } from 'react-native'

import { colors } from '../../utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  content: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border
  }
})

export default styles
