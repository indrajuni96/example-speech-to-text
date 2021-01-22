import React from 'react'
import { View, Text } from 'react-native'
import Modal from 'react-native-modal'

import styles from './styles'

const PanelHeader = () => (
  <View style={styles.panelHeader}>
    <View style={styles.panelHandle} />
  </View>
)

const ModalMateri = ({ isVisible, close }) => {

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