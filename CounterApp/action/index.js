/**
 * Created by guangqiang on 2017/11/19.
 */
import {Constants} from '../constants'

const Action = {
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

export {Action}