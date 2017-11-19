/**
 * Created by guangqiang on 2017/11/19.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import Type from './constants'

class CounterApp extends Component {

  render() {
    const {value, add, reduce} = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => add()}>
          <Text>+</Text>
        </TouchableOpacity>

        <Text>{value}</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => reduce()}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => {
      return dispatch({type: Type.INCREASE})
    },
    reduce: () => {
      return dispatch({type: Type.DECREASE})
    }
  }
}

export default CounterApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterApp)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  btn: {
    width: 100,
    height: 100,
    marginVertical: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
})