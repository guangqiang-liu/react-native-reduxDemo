/**
 * Created by guangqiang on 2017/11/19.
 */
import {Constants} from '../constants'

const CounterAction = {
  increase() {
    return {
      type: Constants.INCREASE
    }
  },

  decrease() {
    return {
      type: Constants.DECREASE
    }
  }
}

const TodoAction = {

  addItem(dispatch, value) {
    return dispatch({
      type: Constants.ADDITEM,
      value
    })
  },

  deleteItem(dispatch, index) {
    return dispatch({
      type: Constants.DELETEITEM,
      index: index
    })
  },
  checkItem(dispatch, index) {
    return dispatch({
      type: Constants.CHECKITEM,
      index: index
    })
  }
}

export {CounterAction, TodoAction}