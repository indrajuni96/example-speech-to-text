import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'

import { colors } from '../../utils'
import { BoySvg } from '../../assets'
import { Space, CardDrawerMenu } from '../../components'

export default function Drawer({ navigation }) {
  return (
    // <DrawerContentScrollView {...props}>
    <View style={styles.container}>
      <Space valSpace={30} />
      <View style={styles.wrapperImage}>
        <BoySvg width={80} height={80} />
      </View>

      <Space valSpace={10} />
      <Text style={styles.textName}>Indra Juniyanto</Text>

      <Space valSpace={20} />
      <CardDrawerMenu nameNemu="Learning" onPress={() => navigation.navigate("Home")} />

      <CardDrawerMenu nameNemu="Riwayat" onPress={() => { }} />
    </View>
    // </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperImage: {
    backgroundColor: colors.textDefault,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textName: {
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
    textAlign: 'center'
  },
})
