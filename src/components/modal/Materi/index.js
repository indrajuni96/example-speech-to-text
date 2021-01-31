import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import Modal from 'react-native-modal'
import { useSelector, useDispatch } from 'react-redux'
import { showMessage } from 'react-native-flash-message'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'
import { colors } from '../../../utils'
import Input from '../../InputForm'
import Space from '../../space/space'
import Button from '../../Buttons/Button'
import ErrorMessage from '../../Message/ErrorMessage'
import { useMateri } from '../../../context/MateriContext'

const ModalMateri = () => {
  const { isVisible, materiId, closeModal, validationSchema } = useMateri()

  const editedMateri = useSelector((state) => state.materiStore.materies.find(materi => materi.id === materiId))

  const initialValues = {
    kataBicara: editedMateri ? editedMateri.kataBicara : ''
  }

  const onSubmit = async (values, { resetForm }) => {
    Keyboard.dismiss()

    try {
      if (editedMateri) {
        console.log(`edited id ${materiId}`)
        console.log(editedMateri)
      } else {
        await dispatch(createMateri(values))
        resetForm()

        showMessage({
          message: 'Materi success created',
          type: "default",
          backgroundColor: colors.greenDark
        })
      }
    } catch (error) {
      showMessage({
        message: `Materi failed ${editedMateri ? 'edited!' : 'created...'} `,
        type: "default",
        backgroundColor: colors.redDark
      })
    }
    closeModal()
  }

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Tambah Materi</Text>

          <IconMaterialCommunityIcons name="circle-edit-outline" style={styles.icon} />
        </View>

        <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
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

                      <Space valSpace={40} />
                    </>
                  )
                }}
              </Formik>
            </ScrollView>
          </SafeAreaView>
        </KeyboardAvoidingView>

      </View>
    </Modal>
  )
}

export default ModalMateri