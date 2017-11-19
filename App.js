/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import {View} from 'react-native'
import {Provider} from 'react-redux'
import CounterApp from './CounterApp'
import TodoApp from './TodoApp'
import {Router, Scene, Actions} from 'react-native-router-flux'
import LearningRedux from './LearningRedux'
import store from './CounterApp/store'

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='learnRedux' title="LearnRedux" initial={true} component={LearningRedux}/>
    <Scene key="counterApp" title="Counter" component={CounterApp}/>
    <Scene key="todoApp" title="Todo" component={TodoApp}/>
  </Scene>
)

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Router scenes={scenes}/>
      </View>
    )
  }
}

const initApp = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

export default initApp