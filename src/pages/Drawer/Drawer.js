import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colors } from '../../utils'
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
        <CardDrawerMenu nameNemu="Learning" onPress={() => navigation.navigate("Home")} />

        <CardDrawerMenu nameNemu="History" onPress={() => navigation.navigate("History")} />
      </View>

      <View style={styles.wrapperVersion}>
        <Text style={styles.textVersion}>Version 0.0.2 Beta</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperMain: {
    flex: 1
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
  wrapperVersion: {
    flex: 0.1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 10,
    paddingRight: 10,
  },
  textVersion: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
  },
})
