import { Formik } from 'formik'
import React, { useEffect, useCallback } from 'react'
import {
  Text,
  View,
  Keyboard,
  ScrollView,
  Pressable,
} from 'react-native'
import * as Yup from 'yup'
import { showMessage } from 'react-native-flash-message'
import { useDispatch, useSelector } from 'react-redux'
import { useNetInfo } from '@react-native-community/netinfo'

import styles from './styles'
import {
  Input,
  Space,
  Header,
  Button,
  Loading,
  ErrorMessage,
} from '../../components'
import {
  colors,
  debounce,
  InputNumber
} from '../../utils'
import { register } from '../../redux/actions/auth'

export default function Register({ navigation }) {
  const textErrorMessage = 'Wajib Diisi'

  const { isConnected } = useNetInfo()

  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.authStore.isLoading)

  useEffect(() => {
    console.log('re render screen register')
  }, [])

  const onSubmit = useCallback(debounce((values, { resetForm }) => {
    Keyboard.dismiss()

    dispatch(register(values))
      .then(() => {
        resetForm()

        showMessage({
          message: 'User account created & signed in!',
          type: "default",
          backgroundColor: colors.greenDark,
        })
      })
      .catch((error) => {
        let errorMessage = 'Terjadi kesalahan!!!'

        if (error.code === 'auth/email-already-in-use') errorMessage = 'That email address is already in use!'
        if (error.code === 'auth/invalid-email') errorMessage = 'That email address is invalid!'

        showMessage({
          message: errorMessage,
          type: "default",
          backgroundColor: colors.redDark,
        })
      })
  }, 1000), [isConnected])

  const onRegister = () => {
    Keyboard.dismiss()
    setTimeout(() => {
      // navigation.navigate('Login')
      navigation.goBack()
    }, 1000)
  }

  return (
    <>
      <View style={styles.container}>
        <Header
          goBack
          title="Daftar"
          onPress={() => navigation.goBack()} />

        <ScrollView
          style={styles.wrapperScrollView}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperMain}>
            <Formik
              initialValues={{
                nama: '',
                nomor: '',
                email: '',
                password: ''
              }}
              validationSchema={Yup.object({
                nama: Yup.string().required(textErrorMessage).trim(textErrorMessage),
                nomor: Yup.string().required(textErrorMessage),
                email: Yup.string().required(textErrorMessage).trim(textErrorMessage).email('format harus email'),
                password: Yup.string().required(textErrorMessage).trim(textErrorMessage).min(6, 'minimal 6 karakter')
              })}
              onSubmit={onSubmit} >
              {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, touched, errors, isSubmitting }) => {
                const disable = values.email && values.password ? false : true
                const opacity = values.email && values.password ? 1 : 0.3

                return (
                  <>
                    <Input
                      label="Nama"
                      value={values.nama}
                      errors={errors.nama}
                      touched={touched.nama}
                      onChangeText={handleChange('nama')}
                      onBlur={handleBlur('nama')} />
                    <ErrorMessage touched={touched.nama} errors={errors.nama} />

                    <Input
                      label="Nomor telepon"
                      numeric
                      value={values.nomor}
                      errors={errors.nomor}
                      touched={touched.nomor}
                      onChangeText={text => {
                        setFieldValue(
                          'nomor',
                          InputNumber(text)
                        )
                      }}
                      onBlur={handleBlur('nomor')} />
                    <ErrorMessage touched={touched.nomor} errors={errors.nomor} />

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
                      dark
                      name="DAFTAR"
                      opacity={opacity}
                      disabled={disable}
                      onPress={handleSubmit} />

                    <Space height={24} />
                  </>
                )
              }}
            </Formik>
          </View>

          {/* <Space height={10} /> */}
          {/* <View style={styles.wrapperMasuk}>
            <Text style={styles.textSudah}>Sudah pernah punya akun? </Text>

            <Pressable
              onPress={onRegister}>
              <View>
                <Text style={styles.textMasuk}>Masuk</Text>
              </View>
            </Pressable>
          </View> */}

          {/* <Space height={40} /> */}
        </ScrollView>
      </View>

      { isLoading && <Loading />}
    </>
  )
}