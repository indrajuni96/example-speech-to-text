import React, { useEffect } from 'react'
import { SafeAreaView, View, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { showMessage } from 'react-native-flash-message'

import styles from './styles'
import { colors } from '../../utils'
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
  const { isLoading, materies } = useSelector((state) => ({
    isLoading: state.materiStore.isLoading,
    materies: state.materiStore.materies
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    loadMateries()
  }, [])

  const loadMateries = async () => {
    try {
      await dispatch(fetchMateris())
    } catch (error) {
      // console.log(error)

      showMessage({
        message: 'Terjadi kesalahan fetch materies',
        type: "default",
        backgroundColor: colors.redDark
      })
    }
  }

  const editMateriHandle = (id) => {

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
            <FlatList
              data={materies}
              keyExtractor={(_, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <List
                  item={item}
                  onPress={() => console.log('list')} />
              )} />
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