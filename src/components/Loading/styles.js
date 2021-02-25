import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  loading: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    marginTop: 20
  }
})

export default styles