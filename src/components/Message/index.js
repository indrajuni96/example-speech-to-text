import React from 'react'
import {
  Text,
  View
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'
import Space from '../space/space'

const ErrorMessage = ({ touched, errors }) => {
  if (touched && errors) {
    return (
      <View style={styles.wrapperError}>
        <Text style={styles.textError}>{errors}</Text>
      </View>
    )
  }

  return <Space valSpace={24} />
}

export default ErrorMessage

ErrorMessage.propTypes = {
  errors: PropTypes.string,
  touched: PropTypes.bool
}