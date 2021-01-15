import React, { useState } from 'react'
import { Text, View, SafeAreaView, ScrollView } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { showMessage } from 'react-native-flash-message'

import styles from './styles';
import { colors, ConfigBackHandler } from '../../utils'
import { Header, Input, Button, Space, Loading, ErrorMessage } from '../../components'
import { createMateri } from '../../redux/actions/materi'

const initialValues = {
  kataBicara: ''
}

const validationSchema = Yup.object().shape({
  kataBicara: Yup.string()
    .required('Wajib Diisi')
    .trim('Wajib Diisi')
})

const Materi = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const onSubmit = async (values) => {
    setIsLoading(true)

    try {
      await dispatch(createMateri(values))
      setTimeout(() => {
        setIsLoading(false)
        console.log('success')
      }, 2000)

    } catch (error) {
      console.log(error)
      setIsLoading(false)
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
            <Formik
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
            </Formik>
          </ScrollView>
        </SafeAreaView>
      </View>

      { isLoading && <Loading />}
    </>
  )
}

export default Materi