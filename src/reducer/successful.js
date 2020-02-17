import * as types from '../action/types'

function successful (state = false, action) {
  switch (action.type) {
    case types.SET_SUCCESSFUL:
      return action.successful;
    default:
      return state;
  }
}

export default successful