import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Modal from 'react-native-modal'
import { Formik } from 'formik'
import * as Yup from 'yup'

import styles from './styles'
import Input from '../../InputForm'
import Space from '../../space/space'
import Button from '../../Buttons/Button'
import PanelHeader from '../../Header/PanelHeader'
import ErrorMessage from '../../Message/ErrorMessage'
import { useMateri } from '../../../context/MateriContext'

const ModalMateri = ({ isVisible, close }) => {
  console.log('modal materi')
  const { initialValues, validationSchema, onSubmit } = useMateri()

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      onSwipeComplete={close}
      swipeDirection={['down']}>
      <View style={styles.content}>
        <PanelHeader />

        <SafeAreaView style={styles.safeAreaView}>
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
    </Modal>
  )
}

export default ModalMateri