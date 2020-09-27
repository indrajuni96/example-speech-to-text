import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import IconFeather from 'react-native-vector-icons/dist/Feather'

import { colors, ConfigBackHandler, useForm } from '../../utils'
import { Input, Space } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

export default function Form({ navigation }) {
  ConfigBackHandler(navigation)

  const [form, setForm] = useForm({
    namaLengkap: '',
    alamat: '',
    email: '',
    password: ''
  })

  const onContinue = () => {
    console.log('on continue')
    console.log(form)
  }

  return (
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
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  wrapperHeader: {
    height: 65,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textHeader: {
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
  },
  wrapperText: {
    flex: 1,
    alignItems: 'center',
    marginRight: 30
  },
  wrapperMain: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 15
  }
})
