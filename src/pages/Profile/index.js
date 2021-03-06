import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import { Header, Space } from '../../components'
import { ConfigBackHandler } from '../../utils'
import styles from './styles'

export default function Profile({ navigation }) {
  ConfigBackHandler(navigation)
  const user = useSelector((state) => state.authStore.user)

  return (
    <View style={styles.container}>
      <Header
        onPress={() => navigation.toggleDrawer()}
        title="Profile"
      />

      <ScrollView
        style={styles.wrapperMain}
        showsVerticalScrollIndicator={false}>
        <Space height={4} />

        <View style={styles.cardProfile}>
          <Text style={styles.textTitle}>NAMA LENGKAP</Text>
          <Text style={styles.textValue}>{user.nama}</Text>
        </View>
        <Space height={15} />

        <View style={styles.cardProfile}>
          <Text style={styles.textTitle}>UMUR</Text>
          <Text style={styles.textValue}>24</Text>
        </View>
        <Space height={15} />

        <View style={styles.cardProfile}>
          <Text style={styles.textTitle}>EMAIL</Text>
          <Text style={styles.textValue}>{user.email}</Text>
        </View>
        <Space height={15} />

        <View style={styles.cardProfile}>
          <Text style={styles.textTitle}>ALAMAT</Text>
          <Text style={styles.textValue}>Pondok Ungu Permai Blok AB2 No 12</Text>
        </View>
        <Space height={15} />
      </ScrollView>
    </View>
  )
}