/**
 * Created by guangqiang on 2017/11/19.
 */
import React, {Component} from 'react'
import {View, TouchableOpacity, Text, StyleSheet, TextInput, Image, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {TodoAction} from '../CounterApp/action'
class TodoApp extends Component {

  constructor(props) {
    super(props)
    this.textInput = null
    this.state = {
      value: '',
    }
  }

  renderItem() {
    const {itemArr, deleteItem, checkItem} = this.props
    return itemArr.map((item, index) => {
      return (
        <View key={index} style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
          <TouchableOpacity onPress={() => checkItem(index)}>
            <Image source={item.isSelected ? require('../assets/ic_selected.png') : require('../assets/ic_defult.png')} resizeMode={'cover'}/>
          </TouchableOpacity>
          <Text>{item.name}</Text>
          <TouchableOpacity
            style={{marginLeft: 10, borderWidth: 1, borderColor: 'red'}}
            onPress={() => deleteItem(index)}>
            <Text style={{fontSize: 11, paddingHorizontal: 5}}>delete</Text>
          </TouchableOpacity>
        </View>
      )
    })
  }

  submit(value) {
    const {addItem} = this.props
    addItem(value.nativeEvent.text)
    this.setState({value: ''})
  }

  render() {
    const {itemArr} = this.props
    let itemCount = 0
    itemArr.map((item) => {if (!item.isSelected) itemCount += 1})
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={{marginVertical: 10, fontSize: 17, fontWeight: 'bold'}}>代办事项</Text>
          <Text>{`你有 ${itemCount} 项代办事项`}</Text>
          <TextInput
            ref={(ref) => this.textInput = ref}
            style={styles.textInput}
            placeholder={'请输入代办事项'}
            onSubmitEditing={(value) => this.submit(value)}
            onChange={(value) => this.setState({value})}
            value={this.state.value}
          />
          {this.renderItem()}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    itemArr: state.todoApp
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (value) => {
      return TodoAction.addItem(dispatch, value)
    },
    deleteItem: (index) => {
      return TodoAction.deleteItem(dispatch, index)
    },
    checkItem: (index) => {
      return TodoAction.checkItem(dispatch, index)
    }
  }
}

export default TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'red',
    marginVertical: 10,
    paddingVertical: 5
  }
})