/**
 * Created by guangqiang on 2017/11/19.
 */
import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {CounterAction} from './action'
import Template from './template'

class CounterApp extends Component {

  /* 实例化阶段：该阶段主要发生在组件被创建的时候 */

  /** 在组件创建的时候调用一次，用来初始化组件的状态 （1.1）**/
  constructor(props) {
    super(props)
    this.state = {
      isClick: false
    }
    console.log('constructor')
  }

  /** 组件创建并初始化完状态之后，第一次render调用之前，触发此函数 （1.2）**/
  componentWillMount() {
    console.log('componentWillMount')
  }

  /** 此函数用来渲染页面，在生命周期中会被调用多次 （1.3）（2.4）**/
  render() {
    console.log('render')
    const {value, add, reduce} = this.props
    return (
        <View style={styles.container}>
          <TouchableOpacity
              style={styles.btn}
              onPress={() => add()}>
            <Text>+</Text>
          </TouchableOpacity>

          {/* 组件内嵌套调用下一个组件 */}
          <Template textValue={value}/>

          <TouchableOpacity
              style={styles.btn}
              onPress={() => reduce()}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
    )
  }

  /** 在组件的生命周期中只会被执行一次，在第一次调用render之后触发，用来通知组件已经加载完成 （1.4）**/
  componentDidMount() {
    console.log('componentDidMount')
  }

  /* 运行阶段：该阶段主要发生在用户操作之后，或者父组件有更新的时候，此时会根据用户的操作行为，进行相应的界面结构调整 */

  /** 当组件接收到新的props时，会触发该函数，在该函数中，通常可以调用setState()来完成对state的修改操作 （2.1）**/
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
    console.log('componentWillReceiveProps')
  }

  /** 当组件接收到新的props时或者状态机改变的时，都会触发此函数，可以通过控制新的属性或者状态机变化来判断是不是需要重新渲染UI （2.2）**/
  shouldComponentUpdate(nextProps) {
    console.log('shouldComponentUpdate')
    return true
  }

  /** 当组件状态机或者props改变时，并且上面的shouldComponentUpdate()函数返回值为true，就会触发此函数来准备更新组件 （2.3）**/
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  /** 调用了render()函数，更新完界面之后，就会触发此函数，这里已经完成了属性和状态机的更新 （2.5）**/
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  /* 销毁阶段：该阶段主要发生组件销毁的时候触发 */

  /** 当组件要被从界面上移除的时候，就会调用此函数，在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等 （3.1）**/
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}

/* 初始化数据阶段 */

/** 设置默认属性 **/
CounterApp.defaultProps = {

}

/** 设置默认属性的类型 **/
CounterApp.propTypes = {

}

const mapStateToProps = (state) => {
  return {
    value: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => {
      return dispatch(CounterAction.increase())
    },
    reduce: () => {
      return dispatch(CounterAction.decrease())
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