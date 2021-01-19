import { Formik } from 'formik'
import React, { useEffect } from 'react'
import { Keyboard, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'

import { ErrorMessage, Header, Input, Loading, Space, Button } from '../../components'
import { login } from '../../redux/actions/auth'
import { colors } from '../../utils'
import styles from './styles'

export default function Login({ navigation }) {
  const textErrorMessage = 'Wajib Diisi'
  const isLoading = useSelector((state) => state.authStore.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('re render screen login')
  }, [])

  const onSubmit = (values, { resetForm }) => {
    Keyboard.dismiss()
    dispatch(login(values))
      .then((result) => {
        navigation.replace("App")
      })
      .catch((error) => {
        let errorMessage = 'Terjadi kesalahan!!!'
        console.log(error.code)

        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') errorMessage = 'Email atau Password Anda salah'

        if (error.code === 'auth/network-request-failed') errorMessage = 'Tidak ada koneksi internet'

        showMessage({
          message: errorMessage,
          type: "default",
          backgroundColor: colors.redDark
        })
      })
  }

  const onSubmitDaftar = () => {
    navigation.navigate('Register')

    // console.log('Daftar')
    // showMessage({
    //   message: 'Maaf fitur belum tersedia, untuk membantu pengembangan fitur ini bisa isi via "GOPAY" ke "089502165963 untuk membeli COFFE...',
    //   type: "default",
    //   backgroundColor: colors.textDefault,
    // })
  }

  return (
    <>
      <View style={styles.container}>
        <Header
          goBack
          // title="Masuk"
          onPress={() => navigation.goBack()}
        />

        <ScrollView style={styles.wrapperScrollView}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperTitle}>
            <Text style={styles.textLogin}>Kyoto</Text>
            <Text style={styles.textAccess}>Akses untuk belajar</Text>
          </View>
          <Space valSpace={50} />

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
              onSubmit={onSubmit}
            >
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
                    <Button
                      name='MASUK'
                      opacity={opacity}
                      disabled={disable}
                      onPress={handleSubmit} />
                    <Space valSpace={24} />
                  </>
                )
              }
              }
            </Formik>
          </View>

          {/* <Space valSpace={20} />
          <View style={styles.wrapperDaftar}>
            <Text style={styles.textBelum}>Belum punya akun?</Text>

            <TouchableWithoutFeedback
              onPress={onSubmitDaftar}>
              <View>
                <Text style={styles.textDaftar}>Daftar Disini</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <Space valSpace={50} /> */}
        </ScrollView>
      </View>

      { isLoading && <Loading />}
    </>
  )
}