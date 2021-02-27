import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

const Space = ({ height, width }) => {
  return <View style={{ height, width }} />
}

export default Space

Space.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
}