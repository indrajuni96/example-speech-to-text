import React, { useState } from 'react'
import { Text, View, SafeAreaView, ScrollView, Keyboard } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { showMessage } from 'react-native-flash-message'

import styles from './styles';
import { colors, ConfigBackHandler } from '../../utils'
import { Header, Input, Button, Space, Loading, ErrorMessage, List, ModalMateri } from '../../components'
import { createMateri } from '../../redux/actions/materi'

const initialValues = {
  kataBicara: ''
}

const validationSchema = Yup.object({
  kataBicara: Yup.string()
    .required('Wajib Diisi')
    .trim('Wajib Diisi')
})

const Materi = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false)
  const isLoading = useSelector((state) => state.materiStore.isLoading)
  const dispatch = useDispatch()

  const onSubmit = async (values, { resetForm }) => {
    Keyboard.dismiss()

    try {
      await dispatch(createMateri(values))
      resetForm()

      showMessage({
        message: 'Materi success created',
        type: "default",
        backgroundColor: colors.greenDark
      })
    } catch (error) {
      showMessage({
        message: 'Materi failed created!',
        type: "default",
        backgroundColor: colors.redDark
      })
    }
  }

  return (
    <>
      <View style={styles.container}>
        <ModalMateri
          isVisible={isVisible}
          close={() => setIsVisible(false)}
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema} />

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

      { isLoading && <Loading />}
    </>
  )
}

export default Materi