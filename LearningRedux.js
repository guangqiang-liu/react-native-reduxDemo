/**
 * Created by guangqiang on 2017/11/19.
 */
import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class LearningRedux extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => Actions.counterApp()}
        >
          <Text>CounterApp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => Actions.todoApp()}
        >
          <Text>TodoApp</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    alignItems: 'center',
    width: 100,
    height: 100,
    marginVertical: 50,
    backgroundColor: 'red',
    justifyContent: 'center'
  }
})