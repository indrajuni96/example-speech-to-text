import React, { useState } from 'react'
import { Text, View, SafeAreaView, ScrollView, Keyboard } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { showMessage } from 'react-native-flash-message'

import styles from './styles';
import { colors, ConfigBackHandler } from '../../utils'
import { Header, Input, Button, Space, Loading, ErrorMessage, List } from '../../components'
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


            {/* <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}>
              {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => {
                const disable = values.kataBicara ? false : true
                const opacity = values.kataBicara ? 1 : 0.3

                return (
                  <>
                    <Input
                      label="Kata Bicara"
                      value={values.kataBicara}
                      errors={errors.kataBicara}
                      touched={touched.kataBicara}
                      onChangeText={handleChange('kataBicara')}
                      onBlur={handleBlur('kataBicara')}
                    />
                    <ErrorMessage touched={touched.kataBicara} errors={errors.kataBicara} />

                    <Space valSpace={20} />

                    <Button
                      dark
                      name='SIMPAN'
                      opacity={opacity}
                      disabled={disable}
                      onPress={handleSubmit} />
                  </>
                )
              }}
            </Formik> */}
          </ScrollView>
        </SafeAreaView>

        <View style={styles.fab}>
          <Button
            dark
            circle
            onPress={() => console.log('fab')} />
        </View>
      </View>

      { isLoading && <Loading />}
    </>
  )
}

export default Materi