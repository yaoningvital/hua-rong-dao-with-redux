import * as types from '../action/types'

function isShowHowing (state = false, action) {
  switch (action.type) {
    case types.SET_IS_SHOW_HOWING:
      return action.isShowHowing;
    default:
      return state;
  }
}

export default isShowHowing