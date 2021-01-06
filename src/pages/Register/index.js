import { Formik } from 'formik'
import React, { useEffect } from 'react'
import { Keyboard, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { ErrorMessage, Header, Input, Loading, Space } from '../../components'
import { register } from '../../redux/actions/auth'
import { colors, InputNumber } from '../../utils'
import styles from './styles'

export default function Register({ navigation }) {
  const textErrorMessage = 'Wajib Diisi'
  const isLoading = useSelector((state) => state.authStore.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('re render screen register')
  }, [])

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

  const onSubmitMasuk = () => {
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
          onPress={() => navigation.goBack()}
          title="Daftar"
          goBack
        />

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
              onSubmit={onSubmit}
            >
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
                      onBlur={handleBlur('nama')}
                    />
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
                      onBlur={handleBlur('nomor')}
                    />
                    <ErrorMessage touched={touched.nomor} errors={errors.nomor} />

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
                    <TouchableWithoutFeedback
                      disabled={disable}
                      onPress={handleSubmit}
                    >
                      <View style={[styles.button, { opacity }]}>
                        <Text style={styles.textButton}>Daftar</Text>
                      </View>
                    </TouchableWithoutFeedback>
                    <Space valSpace={24} />
                  </>
                )
              }
              }
            </Formik>
          </View>

          {/* <Space valSpace={10} /> */}
          {/* <View style={styles.wrapperMasuk}>
            <Text style={styles.textSudah}>Sudah pernah punya akun? </Text>

            <TouchableWithoutFeedback
              onPress={onSubmitMasuk}>
              <View>
                <Text style={styles.textMasuk}>Masuk</Text>
              </View>
            </TouchableWithoutFeedback>
          </View> */}

          {/* <Space valSpace={40} /> */}
        </ScrollView>
      </View>

      { isLoading && <Loading />}
    </>
  )
}