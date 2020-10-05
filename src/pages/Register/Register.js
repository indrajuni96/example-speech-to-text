import React from 'react'
import { ScrollView, StatusBar, Text, View, TouchableOpacity } from 'react-native'

import { colors, ConfigBackHandler } from '../../utils'
import { Input, Loading, Space, ErrorMessage } from '../../components'
import styles from './styles'

export default function Register() {
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
          <Input
            label="Email"
          />
          <ErrorMessage />

          <Input
            label="password"
            secureTextEntry
          />
          <ErrorMessage />

          <Space valSpace={24} />
          <TouchableOpacity
            style={styles.button}
          // onPress={handleSubmit}
          >
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
          <Space valSpace={24} />
        </View>

      </View>
    </>
  )
}