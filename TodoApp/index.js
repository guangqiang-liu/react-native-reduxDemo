/**
 * Created by guangqiang on 2017/11/19.
 */
import React, {Component} from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'

export default class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>dada</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})