import React from 'react'
import {
  View,
  Text,
  Keyboard,
  Pressable,
  ScrollView,
  SafeAreaView,
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
import Picker from '../../Picker'
import Button from '../../Buttons/Button'
import ErrorMessage from '../../Message'
import { createMateri, updateMateri, deleteMateri } from '../../../redux/actions/materi'
import { useMateri } from '../../../context/MateriContext'

const itemKategori = [
  { label: 'Football', value: 'football' },
  { label: 'Baseball', value: 'baseball' },
  { label: 'Hockey', value: 'hockey' },
]

const ModalMateri = () => {
  const { isVisible, materiId, closeModal, validationSchema } = useMateri()

  const editedMateri = useSelector((state) => state.materiStore.materies.find(materi => materi.id === materiId))

  const dispatch = useDispatch()

  const initialValues = {
    kategori: editedMateri ? editedMateri.kategori : '',
    kataBicara: editedMateri ? editedMateri.kataBicara : ''
  }

  const onSubmit = async (values, { resetForm }) => {
    Keyboard.dismiss()

    try {
      if (editedMateri) {
        await dispatch(updateMateri(materiId, values))

        showMessage({
          message: 'Materi success updated',
          type: "default",
          backgroundColor: colors.greenDark
        })
      } else {
        await dispatch(createMateri(values))

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

    resetForm()
    closeModal()
  }

  const onDelete = async () => {
    try {
      await dispatch(deleteMateri(editedMateri.id))

      showMessage({
        message: 'Materi success deleted',
        type: "default",
        backgroundColor: colors.greenDark
      })
    } catch {
      showMessage({
        message: "Materi failed deleted ",
        type: "default",
        backgroundColor: colors.redDark
      })
    }

    // resetForm()
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
          <Text style={styles.textHeader}>{editedMateri ? 'Edit' : 'Tambah'} Materi</Text>

          <Pressable onPress={closeModal}>
            <IconMaterialCommunityIcons name="close" style={styles.icon} />
          </Pressable>
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
                      <Text style={styles.label}>Kategori</Text>
                      <Picker
                        items={itemKategori}
                        onValueChange={(value) => console.log(value)} />
                      <ErrorMessage touched={touched.kataBicara} errors={errors.kataBicara} />

                      <Input
                        label="Kata Bicara"
                        value={values.kataBicara}
                        errors={errors.kataBicara}
                        touched={touched.kataBicara}
                        onChangeText={handleChange('kataBicara')}
                        onBlur={handleBlur('kataBicara')} />
                      <ErrorMessage touched={touched.kataBicara} errors={errors.kataBicara} />

                      <Space height={20} />

                      <Button
                        dark
                        name='SIMPAN'
                        opacity={opacity}
                        disabled={disable}
                        onPress={handleSubmit} />

                      {editedMateri ?
                        <>
                          <Space height={20} />

                          <Button
                            name='HAPUS'
                            opacity={opacity}
                            disabled={disable}
                            onPress={onDelete} />
                        </>
                        : null}

                      <Space height={40} />
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