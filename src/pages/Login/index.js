import React, { useCallback } from 'react'
import {
  Text,
  View,
  Keyboard,
  ScrollView,
} from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { useNetInfo } from '@react-native-community/netinfo'
import { useDispatch, useSelector } from 'react-redux'
import { showMessage } from 'react-native-flash-message'

import styles from './styles'
import { colors, debounce } from '../../utils'
import {
  Input,
  Space,
  Header,
  Button,
  Loading,
  ErrorMessage,
} from '../../components'
import { login } from '../../redux/actions/auth'

export default function Login({ navigation }) {
  const textErrorMessage = 'Wajib Diisi'

  const isLoading = useSelector((state) => state.authStore.isLoading)

  const dispatch = useDispatch()
  const { isConnected } = useNetInfo()

  const onSubmit = useCallback(debounce((values, { resetForm }) => {
    Keyboard.dismiss()

    if (isConnected) {
      dispatch(login(values))
        .then(() => {
          navigation.replace("App")
        })
        .catch((error) => {
          let errorMessage = 'Terjadi kesalahan!!!'

          if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') errorMessage = 'Email atau Password Anda salah'

          if (error.code === 'auth/network-request-failed') errorMessage = 'Tidak ada koneksi internet'

          showMessage({
            message: errorMessage,
            type: "default",
            backgroundColor: colors.redDark
          })
        })
    } else {
      showMessage({
        message: 'Tidak ada koneksi internet',
        type: "default",
        backgroundColor: colors.redDark
      })
    }
  }, 1000), [isConnected])

  const onRegister = useCallback(debounce(() => {
    navigation.navigate('Register')
  }, 1000), [])

  return (
    <>
      <View style={styles.container}>
        <Header
          goBack
          onPress={() => navigation.goBack()} />

        <ScrollView style={styles.wrapperScrollView}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperTitle}>
            <Text style={styles.textLogin}>Kyoto</Text>
            <Text style={styles.textAccess}>Akses untuk belajar</Text>
          </View>
          <Space height={50} />

          <View style={styles.wrapperMain}>
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              validationSchema={Yup.object({
                email: Yup.string().required(textErrorMessage).trim(textErrorMessage).email('format harus email'),
                password: Yup.string().required(textErrorMessage).trim(textErrorMessage).min(6, 'minimal 6 karakter')
              })}
              onSubmit={onSubmit}>
              {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isSubmitting }) => {
                const disable = values.email && values.password ? false : true
                const opacity = values.email && values.password ? 1 : 0.3

                return (
                  <>
                    <Input
                      label="Email"
                      value={values.email}
                      errors={errors.email}
                      touched={touched.email}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')} />
                    <ErrorMessage touched={touched.email} errors={errors.email} />

                    <Input
                      label="Password"
                      secureTextEntry
                      value={values.password}
                      errors={errors.password}
                      touched={touched.password}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')} />
                    <ErrorMessage touched={touched.password} errors={errors.password} />

                    <Space height={24} />
                    <Button
                      name='MASUK'
                      opacity={opacity}
                      disabled={disable}
                      onPress={handleSubmit} />
                    <Space height={24} />
                  </>
                )
              }}
            </Formik>
          </View>

        </ScrollView>
      </View>

      { isLoading && <Loading />}
    </>
  )
}