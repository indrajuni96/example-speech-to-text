import { StyleSheet, Dimensions, StatusBar } from 'react-native'

import { colors } from '../../../utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    height: SCREEN_HEIGHT / 1.5,
    backgroundColor: colors.white,
    borderTopLeftRadius: SCREEN_HEIGHT * 0.02,
    borderTopRightRadius: SCREEN_HEIGHT * 0.02,
    overflow: 'hidden'
  },
  safeAreaView: {
    flex: 1,
    paddingHorizontal: 20
  },
  keyboardAvoidingView: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textHeader: {
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
  },
  icon: {
    color: colors.textDefault,
    fontSize: SCREEN_WIDTH * 0.08
  },
  label: {
    fontSize: 16,
    color: colors.textDefault,
    marginBottom: 6,
    fontFamily: 'Roboto-Regular',
  }
})

export default styles
