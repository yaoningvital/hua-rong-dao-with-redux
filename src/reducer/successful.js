import * as types from '../action/constants'

function successful (state = false, action) {
  switch (action.type) {
    case types.SET_SUCCESSFUL:
      return action.successful;
    default:
      return state;
  }
}

export default successful