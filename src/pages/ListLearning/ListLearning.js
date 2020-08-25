import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import IconFeather from 'react-native-vector-icons/dist/Feather';

import { CardLearning, Space } from '../../components';
import { colors } from '../../utils';


export default function ListLearning() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={styles.wrapperHeader}>
        <IconFeather name="bar-chart-2" size={30} color={colors.textDefault} style={{ transform: [{ rotate: '90deg' }] }} />
      </View>

      <View style={styles.wrapperMain}>
        <Space valSpace={4} />
        <View style={styles.headerMain}>
          <Text style={styles.textHeader}>Learning Japanes</Text>
          <Text style={styles.textCourse}>Course</Text>
        </View>

        <Space valSpace={10} />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.headerMain}>

          <CardLearning textJapan="なにしてるの" />

          <Space valSpace={10} />
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
  wrapperMain: {
    flex: 1,
    // paddingHorizontal: 15
  },
  headerMain: {
    paddingHorizontal: 15
  },
  textCourse: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: colors.textDefault,
  },
})