import React from 'react'
import { Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import styles from './styles'
import { BoySvg } from '../../assets'
import { Space, CardDrawerMenu } from '../../components'
import { logout } from '../../redux/actions/auth'

export default function Drawer({ navigation }) {
  const { user, isLoading } = useSelector((state) => state.authStore)
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
      .then(() => {
        navigation.replace("Auth")
      })
      .catch((error) => {
        console.log(error)
        // showMessage error blm di buat
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapperMain}>
        <Space height={30} />
        <View style={styles.wrapperImage}>
          <BoySvg width={80} height={80} />
        </View>

        <Space height={10} />
        <Text style={styles.textName}>{user.nama}</Text>

        <Space height={20} />
        <CardDrawerMenu name="Dashboard" onPress={() => navigation.navigate("Dashboard")} />

        <CardDrawerMenu name="Materi" onPress={() => navigation.navigate("Materi")} />

        <CardDrawerMenu name="Form Example" onPress={() => navigation.navigate("Form")} />

        <CardDrawerMenu name="History" onPress={() => navigation.navigate("History")} />

        <CardDrawerMenu name="Profile" onPress={() => navigation.navigate("Profile")} />

        <CardDrawerMenu name="Logout" onPress={onLogout} />
      </View>

      <View style={styles.wrapperVersion}>
        <Text style={styles.textVersion}>Version 0.2.0 Beta</Text>
      </View>
    </View>
  )
}