import * as types from '../action/types'

function isTouchEvent (state = false, action) {
  switch (action.type) {
    case types.SET_IS_TOUCH_EVENT:
      return action.isTouchEvent;
    default:
      return state;
  }
  
}

export default isTouchEvent