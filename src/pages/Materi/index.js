import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import styles from './styles'
import {
  Fab,
  Header,
  List,
  Loading,
  ModalMateri
} from '../../components'
import { fetchMateris } from '../../redux/actions/materi'
import { MateriProvider } from '../../context/MateriContext'

const Materi = ({ navigation }) => {
  const isLoading = useSelector((state) => state.materiStore.isLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    loadMateries()
  }, [])

  const loadMateries = async () => {
    try {
      await dispatch(fetchMateris())
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <MateriProvider>
        <View style={styles.container}>
          <ModalMateri />

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
            <Fab
              dark
              circle
              name="Materi" />
          </View>
        </View>
      </MateriProvider>

      {isLoading && <Loading />}
    </>
  )
}

export default Materi