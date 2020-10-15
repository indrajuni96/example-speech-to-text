import React, { useEffect } from 'react'
import { ScrollView, StatusBar, Text, TouchableWithoutFeedback, View, Keyboard } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { useDispatch, useSelector } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { ErrorMessage, Input, Loading, Space } from '../../components'
import { login } from '../../redux/actions/auth'
import { colors, ConfigBackHandler, InputNumber } from '../../utils'
import styles from './styles'

export default function Register({ navigation }) {
  ConfigBackHandler(navigation)
  const textErrorMessage = 'Wajib Diisi'
  const isLoading = useSelector((state) => state.authStore.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('re render screen register')
  }, [])

  const onSubmit = (values, { resetForm }) => {
    Keyboard.dismiss()
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
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView style={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Space valSpace={50} />
        <View style={styles.wrapperTitle}>
          <Text style={styles.textLogin}>Register</Text>
        </View>
        <Space valSpace={50} />

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
                      <Text style={styles.textButton}>Register</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <Space valSpace={24} />
                </>
              )
            }
            }
          </Formik>
        </View>

        <Space valSpace={20} />
        <View style={styles.wrapperMasuk}>
          <Text style={styles.textSudah}>Sudah pernah punya akun? </Text>

          <TouchableWithoutFeedback
            onPress={onSubmitMasuk}>
            <View>
              <Text style={styles.textMasuk}>Masuk</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <Space valSpace={50} />
      </ScrollView>

      { isLoading && <Loading />}
    </>
  )
}