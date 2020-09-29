import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Button, ScrollView, Keyboard } from 'react-native'
import IconFeather from 'react-native-vector-icons/dist/Feather'
import auth from '@react-native-firebase/auth'

import styles from './styles'
import { colors, ConfigBackHandler, useForm } from '../../utils'
import { Input, Space, Loading } from '../../components'

export default function Form({ navigation }) {
  ConfigBackHandler(navigation)

  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useForm({
    namaLengkap: '',
    alamat: '',
    email: '',
    password: ''
  })

  const onContinue = () => {
    console.log('on continue')
    Keyboard.dismiss()
    setIsLoading(true)

    auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(() => {
        console.log('User account created & signed in!');
        setForm('reset')
        setIsLoading(false)
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
        setIsLoading(false)
      });
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

            <Button
              title="Continue"
              onPress={onContinue}
            />
            <Space valSpace={24} />
          </ScrollView>
        </View>
      </View>

      {isLoading && <Loading />}
    </>
  )
}