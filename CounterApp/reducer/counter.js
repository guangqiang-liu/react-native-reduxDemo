/**
 * Created by guangqiang on 2017/11/19.
 */
import Constants from '../constants'

const counter = (state = 10, action) => {
  switch (action.type) {
    case Constants.INCREASE:
      return state + 1
    case Constants.DECREASE:
      return state - 1
    default:
      return state
  }
}

export default counter