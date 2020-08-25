import React from 'react'
import { StyleSheet, StatusBar, Text, View, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { toRomaji } from 'wanakana';

import { colors } from '../../utils'
import { Space } from '../../components'

export default function ListLearning() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={styles.wrapperHeader}>
        <Icon name="menu" size={30} color={colors.textDefault} />
      </View>


      <View style={styles.wrapperMain}>
        <Space valSpace={4} />
        <Text style={styles.textHeader}>Learning Japanes</Text>
        <Text style={styles.textCourse}>Course</Text>

        <Space valSpace={10} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Space valSpace={10} />
          <View style={styles.wrapperCard}>
            <View style={styles.btnPlay}>
              <Icon name="play" size={25} color="white" />
            </View>

            <View style={styles.wrapperCardText}>
              <Text style={styles.textJapanes}>なにしてるの</Text>
              <Text style={styles.textRomaji}>{toRomaji('なにしてるの')}</Text>
            </View>
          </View>

          <Space valSpace={10} />
          <View style={styles.wrapperCard}>
            <View style={styles.btnPlay}>
              <Icon name="play" size={25} color="white" />
            </View>

            <View style={styles.wrapperCardText}>
              <Text style={styles.textJapanes}>なにしてるの</Text>
              <Text style={styles.textRomaji}>{toRomaji('なにしてるの')}</Text>
            </View>
          </View>

          <Space valSpace={10} />
          <View style={styles.wrapperCard}>
            <View style={styles.btnPlay}>
              <Icon name="play" size={25} color="white" />
            </View>

            <View style={styles.wrapperCardText}>
              <Text style={styles.textJapanes}>なにしてるの</Text>
              <Text style={styles.textRomaji}>{toRomaji('なにしてるの')}</Text>
            </View>
          </View>

          <Space valSpace={10} />
          <View style={styles.wrapperCard}>
            <View style={styles.btnPlay}>
              <Icon name="play" size={25} color="white" />
            </View>

            <View style={styles.wrapperCardText}>
              <Text style={styles.textJapanes}>なにしてるの</Text>
              <Text style={styles.textRomaji}>{toRomaji('なにしてるの')}</Text>
            </View>
          </View>

          <Space valSpace={10} />
          <View style={styles.wrapperCard}>
            <View style={styles.btnPlay}>
              <Icon name="play" size={25} color="white" />
            </View>

            <View style={styles.wrapperCardText}>
              <Text style={styles.textJapanes}>なにしてるの</Text>
              <Text style={styles.textRomaji}>{toRomaji('なにしてるの')}</Text>
            </View>
          </View>

          <Space valSpace={10} />
          <View style={styles.wrapperCard}>
            <View style={styles.btnPlay}>
              <Icon name="play" size={25} color="white" />
            </View>

            <View style={styles.wrapperCardText}>
              <Text style={styles.textJapanes}>なにしてるの</Text>
              <Text style={styles.textRomaji}>{toRomaji('なにしてるの')}</Text>
            </View>
          </View>

          <Space valSpace={10} />
          <View style={styles.wrapperCard}>
            <View style={styles.btnPlay}>
              <Icon name="play" size={25} color="white" />
            </View>

            <View style={styles.wrapperCardText}>
              <Text style={styles.textJapanes}>なにしてるの</Text>
              <Text style={styles.textRomaji}>{toRomaji('なにしてるの')}</Text>
            </View>
          </View>

          <Space valSpace={10} />
          <View style={styles.wrapperCard}>
            <View style={styles.btnPlay}>
              <Icon name="play" size={25} color="white" />
            </View>

            <View style={styles.wrapperCardText}>
              <Text style={styles.textJapanes}>なにしてるの</Text>
              <Text style={styles.textRomaji}>{toRomaji('なにしてるの')}</Text>
            </View>
          </View>

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
    paddingHorizontal: 10,
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
    paddingHorizontal: 10
  },
  textCourse: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: colors.textDefault,
  },
  wrapperCard: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: colors.border,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 10,
    flexDirection: 'row',
  },
  btnPlay: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 40,
    height: 40,
    backgroundColor: colors.textDefault,
    borderRadius: 20,
  },
  wrapperCardText: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20
  },
  textJapanes: {
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
  },
  textRomaji: {
    fontSize: 11,
    fontFamily: 'Roboto-Regular',
    color: colors.textDefault,
  },
})
