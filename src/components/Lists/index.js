import React from 'react'
import {
  Text,
  View,
  Pressable
} from 'react-native'
import PropTypes from 'prop-types'
import IconIonicons from 'react-native-vector-icons/Ionicons'

import styles from './styles'
import Space from '../space/space'
import { useMateri } from '../../context/MateriContext'

const List = ({ item }) => {
  const { editMateriHandle } = useMateri()

  return (
    <View style={styles.content}>
      <Pressable
        style={styles.pressable}
        android_ripple={styles.ripple}
        onPress={() => editMateriHandle(item.id)}>
        <View style={styles.contentIcon}>
          <IconIonicons name="cube-sharp" style={styles.icon} />
        </View>

        <Space width={20} />

        <View>
          <Text style={styles.text}>{item.kataBicara.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default List

List.propTypes = {
  item: PropTypes.object
}