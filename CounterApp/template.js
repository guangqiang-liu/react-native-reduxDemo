import React, {Component} from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

export default class Template extends Component {

  constructor(props) {
    super(props)
    console.log(`这个地方打印初始化之前的默认属性：${this.props.customProps}`)
  }

  render() {
    const {textValue} = this.props
    return (
        <Text>{textValue}</Text>
    )
  }
}

Template.defaultProps = {
  customProps: '这个是默认的属性哦'
}

Template.propTypes = {
  textValue: PropTypes.number.isRequired
}