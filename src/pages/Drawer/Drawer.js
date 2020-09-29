import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'
import { BoySvg } from '../../assets'
import { Space, CardDrawerMenu } from '../../components'

export default function Drawer({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperMain}>
        <Space valSpace={30} />
        <View style={styles.wrapperImage}>
          <BoySvg width={80} height={80} />
        </View>

        <Space valSpace={10} />
        <Text style={styles.textName}>Indra Juniyanto</Text>

        <Space valSpace={20} />
        <CardDrawerMenu nameNemu="Dashboard" onPress={() => navigation.navigate("Home")} />

        <CardDrawerMenu nameNemu="Form Example" onPress={() => navigation.navigate("Form")} />

        <CardDrawerMenu nameNemu="History" onPress={() => navigation.navigate("History")} />

        <CardDrawerMenu nameNemu="Profile" onPress={() => { }} />
      </View>

      <View style={styles.wrapperVersion}>
        <Text style={styles.textVersion}>Version 0.1.2 Beta</Text>
      </View>
    </View>
  )
}