import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import IconFontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';

import { colors } from '../../../utils'
import Space from '../../space/space'

export default function CardDrawerMenu({ nameNemu, onPress }) {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.wrapperCard}>
          <View>
            <IconFontAwesome5
              name="record-vinyl"
              size={30}
              color={colors.textDefault} />
          </View>

          <View style={styles.cardText}>
            <Text style={styles.textMenu}>{nameNemu}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  wrapperCard: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingVertical: 10,
  },
  textMenu: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: colors.textDefault,
  },
  cardText: {
    flex: 1,
    marginLeft: 20,
    alignSelf: 'center',
    borderBottomColor: colors.textDefault,
    borderBottomWidth: 0.5
  }
})
