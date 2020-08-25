import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import IconIonicons from 'react-native-vector-icons/dist/Ionicons';
import { toRomaji } from 'wanakana';

import { colors } from '../../utils'
import Space from '../space/space'

export default function CardLearning({ textJapan }) {
  return (
    <>
      <Space valSpace={10} />
      <TouchableOpacity>
        <View style={styles.wrapperCard}>
          <View style={styles.btnPlay}>
            <IconIonicons name="play" size={25} color="white" />
          </View>

          <View style={styles.wrapperCardText}>
            <Text style={styles.textJapanes}>{textJapan}</Text>
            <Text style={styles.textRomaji}>{toRomaji(textJapan)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({

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