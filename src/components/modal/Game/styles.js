import { StyleSheet, Dimensions } from 'react-native'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    flex: 1
  },
  scrollableModal: {
    height: SCREEN_HEIGHT * 0.4,
    padding: 20
  },
  textTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,

  },
  textMain: {
    fontFamily: 'Roboto-Regular',
    fontSize: 17,
  },
  wrapperButton: {
    flex: 0.3,
    justifyContent: 'center',
  },
  btnLanjut: {

    borderRadius: 20,
    paddingVertical: 10
  },
  textBtnLanjut: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    color: 'white',
    fontSize: 18,
  }
})

export default styles
