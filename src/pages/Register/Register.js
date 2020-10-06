import React from 'react'
import { ScrollView, StatusBar, Text, View, TouchableWithoutFeedback } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { colors, ConfigBackHandler } from '../../utils'
import { Input, Loading, Space, ErrorMessage } from '../../components'
import styles from './styles'

export default function Register() {
  const textErrorMessage = 'Wajib Diisi'

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <Space valSpace={50} />
        <View style={styles.wrapperTitle}>
          <Text style={styles.textLogin}>Login</Text>
          <Text style={styles.textAccess}>Access account</Text>
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
                  <TouchableWithoutFeedback
                    disabled={disable}
                    onPress={handleSubmit}
                  >
                    <View style={[styles.button, { opacity }]}>
                      <Text style={styles.textButton}>Login</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <Space valSpace={24} />
                </>
              )
            }
            }
          </Formik>
        </View>

      </View>
    </>
  )
}