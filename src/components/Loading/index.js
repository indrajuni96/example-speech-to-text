import React from 'react'
import {
  Text,
  View,
  StatusBar,
  ActivityIndicator,
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import { colors } from '../../utils'

const Loading = ({ splash }) => {
  const color = splash ? colors.textDefault : 'white'
  const backgroundColor = splash ? 'white' : 'rgba(0,0,0,0.5)'
  const text = splash ? 'Please wait...' : 'Loading...'

  return (
    <>
      {splash && <StatusBar backgroundColor="white" barStyle="dark-content" />}
      <View style={[styles.wrapper, { backgroundColor }]}>
        <ActivityIndicator size="large" color={color} />
        <Text style={[styles.loading, { color }]}>{text}</Text>
      </View>
    </>
  )
}


export default Loading

Loading.propTypes = {
  splash: PropTypes.bool
}