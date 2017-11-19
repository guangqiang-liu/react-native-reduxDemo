/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {Provider} from 'react-redux'
import CounterApp from './CounterApp'

import store from './CounterApp/store'

const initApp = () => {
  return (
    <Provider store={store}>
      <CounterApp/>
    </Provider>
  )
}

export default initApp
