import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import Modal from 'react-native-modal'

import { Space } from '../'

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function ModalExample({ isModalVisible, toggleModal, isQuestion }) {
  const bgColorModal = isQuestion ? '#b8f28b' : '#ffc1c1'
  const colorText = isQuestion ? '#58a700' : '#ea2b2b'
  const bgColorBtn = isQuestion ? '#78c800' : '#ff4b4b'

  return (
    <Modal
      // testID={'modal'}
      isVisible={isModalVisible}
      animationInTiming={2000}
      animationOutTiming={2000}
      animationOut={"slideOutDown"}
      style={styles.modal}>
      <View style={[styles.scrollableModal, { backgroundColor: bgColorModal, }]}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.textTitle, { color: colorText }]}>{isQuestion ? "Bagus! Arti:" : "Kita lewatkan dulu yang satu ini."}</Text>
          <Space valSpace={10} />

          <Text style={[styles.textMain, { color: colorText }]}>{isQuestion ? 'Hello' : 'Belajar lagi!!!'}</Text>
        </View>

        <View style={styles.wrapperButton}>
          <TouchableOpacity style={[styles.btnLanjut, { backgroundColor: bgColorBtn, }]} onPress={toggleModal}>
            <Text style={styles.textBtnLanjut}>LANJUTKAN</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  )
}

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
  },
})
