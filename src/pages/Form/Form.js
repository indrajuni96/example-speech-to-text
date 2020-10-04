import { Formik } from 'formik'
import React from 'react'
import { Keyboard, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

import { ErrorMessage, Header, Input, Loading, Space } from '../../components'
import { register } from '../../redux/actions/auth'
import { colors, ConfigBackHandler } from '../../utils'
import styles from './styles'

export default function Form({ navigation }) {
  ConfigBackHandler(navigation)

  const isLoading = useSelector((state) => state.authStore.isLoading)
  const textErrorMessage = 'Wajib Diisi'
  const dispatch = useDispatch()

  const onSubmit = (values, { resetForm }) => {
    Keyboard.dismiss()

    dispatch(register(values))
      .then(() => {
        resetForm()

        showMessage({
          message: 'User account created & signed in!',
          type: "default",
          backgroundColor: colors.buttonRed,
        })
      })
      .catch((error) => {
        let errorMessage = 'Terjadi kesalahan!!!'

        if (error.code === 'auth/email-already-in-use') errorMessage = 'That email address is already in use!'
        if (error.code === 'auth/invalid-email') errorMessage = 'That email address is invalid!'

        showMessage({
          message: errorMessage,
          type: "default",
          backgroundColor: colors.textDefault,
        })
      })
  }

  return (
    <>
      <View style={styles.container}>
        <Header
          onPress={() => navigation.toggleDrawer()}
          title="Form Example"
        />

        <View style={styles.wrapperMain}>
          <Formik
            initialValues={{
              namaLengkap: '',
              alamat: '',
              email: '',
              password: ''
            }}
            validationSchema={Yup.object({
              namaLengkap: Yup.string().required(textErrorMessage).trim(textErrorMessage),
              alamat: Yup.string().required(textErrorMessage).trim(textErrorMessage),
              email: Yup.string().required(textErrorMessage).trim(textErrorMessage).email('format harus email'),
              password: Yup.string().required(textErrorMessage).trim(textErrorMessage).min(6, 'minimal 6 karakter')
            })}
            onSubmit={onSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
              <ScrollView
                style={styles.scrollView}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}>

                <Input
                  label="Nama Lengkap"
                  value={values.namaLengkap}
                  errors={errors.namaLengkap}
                  touched={touched.namaLengkap}
                  onChangeText={handleChange('namaLengkap')}
                  onBlur={handleBlur('namaLengkap')}
                />
                <ErrorMessage touched={touched.namaLengkap} errors={errors.namaLengkap} />

                <Input
                  label="Alamat"
                  value={values.alamat}
                  errors={errors.alamat}
                  touched={touched.alamat}
                  onChangeText={handleChange('alamat')}
                  onBlur={handleBlur('alamat')}
                />
                <ErrorMessage touched={touched.alamat} errors={errors.alamat} />

                <Input
                  label="Email"
                  value={values.email}
                  errors={errors.email}
                  touched={touched.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                <ErrorMessage touched={touched.email} errors={errors.email} />

                <Input
                  label="Password"
                  secureTextEntry
                  value={values.password}
                  errors={errors.password}
                  touched={touched.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                <ErrorMessage touched={touched.password} errors={errors.password} />

                <Space valSpace={24} />
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSubmit}
                >
                  <Text style={styles.textButton}>Continue</Text>
                </TouchableOpacity>
                <Space valSpace={24} />
              </ScrollView>
            )}
          </Formik>
        </View>
      </View>

      { isLoading && <Loading />}
    </>
  )
}