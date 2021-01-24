import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { useSelector } from 'react-redux'

import styles from './styles'
import {
  Button,
  Header,
  List,
  Loading,
  ModalMateri
} from '../../components'
import { MateriProvider } from '../../context/MateriContext'

const Materi = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false)
  const isLoading = useSelector((state) => state.materiStore.isLoading)

  return (
    <>
      <View style={styles.container}>
        <MateriProvider>
          <ModalMateri
            isVisible={isVisible}
            close={() => setIsVisible(false)} />
        </MateriProvider>

        <Header
          onPress={() => navigation.toggleDrawer()}
          title="Materi"
        />

        <SafeAreaView style={styles.wrapperMain}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <List
              kata="Burung"
              onPress={() => console.log('list')} />

            <List
              kata="Harimau"
              onPress={() => console.log('list')} />

            <List
              kata="Kucing"
              onPress={() => console.log('list')} />

            <List
              kata="Kelinci"
              onPress={() => console.log('list')} />

            <List
              kata="Beruang"
              onPress={() => console.log('list')} />
          </ScrollView>
        </SafeAreaView>

        <View style={styles.fab}>
          <Button
            dark
            circle
            onPress={() => setIsVisible(true)} />
        </View>
      </View>

      {isLoading && <Loading />}
    </>
  )
}

export default Materi