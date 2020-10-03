import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Button, ScrollView, Keyboard } from 'react-native'
import IconFeather from 'react-native-vector-icons/dist/Feather'
import { useDispatch, useSelector } from 'react-redux'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { showMessage } from 'react-native-flash-message'

import styles from './styles'
import { colors, ConfigBackHandler, useForm } from '../../utils'
import { Input, Space, Loading } from '../../components'
import { register } from '../../redux/actions/auth'

export default function Form({ navigation }) {
  ConfigBackHandler(navigation)

  const [form, setForm] = useForm({
    namaLengkap: '',
    alamat: '',
    email: '',
    password: ''
  })
  const isLoading = useSelector((state) => state.authStore.isLoading)
  const dispatch = useDispatch()

  const onContinue = () => {
    Keyboard.dismiss()

    dispatch(register(form))
      .then(() => {
        setForm('reset')

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

  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <IconFeather name="bar-chart-2" size={30} color={colors.textDefault} style={{ transform: [{ rotate: '90deg' }] }} />
          </TouchableOpacity>

          <View style={styles.wrapperText}>
            <Text style={styles.textHeader}>Form Example</Text>
          </View>
        </View>

        <View style={styles.wrapperMain}>
          <ScrollView
            style={styles.scrollView}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <Input
              label="Nama Lengkap"
              value={form.namaLengkap}
              onChangeText={value => setForm('namaLengkap', value)}
            />

            <Space valSpace={24} />
            <Input
              label="Alamat"
              value={form.alamat}
              onChangeText={value => setForm('alamat', value)} />

            <Space valSpace={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />

            <Space valSpace={24} />
            <Input
              label="Password"
              secureTextEntry
              value={form.password}
              onChangeText={value => setForm('password', value)} />
            <Space valSpace={24} />

            <TouchableOpacity
              style={styles.button}
              onPress={onContinue} >
              <Text style={styles.textButton}>Continue</Text>
            </TouchableOpacity>
            <Space valSpace={24} />
          </ScrollView>
        </View>
      </View>

      {isLoading && <Loading />}
    </>
  )
}