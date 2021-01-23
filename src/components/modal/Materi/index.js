import React from 'react'
import { View, Text } from 'react-native'
import Modal from 'react-native-modal'

import styles from './styles'
import PanelHeader from '../../Header/PanelHeader'

const ModalMateri = ({ isVisible, close }) => {
  console.log('modal materi')

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      onSwipeComplete={close}
      swipeDirection={['down']}>
      <View style={styles.content}>
        <PanelHeader />
      </View>
    </Modal>
  )
}

export default ModalMateri