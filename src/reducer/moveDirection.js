import * as types from '../action/constants'

function moveDirection (state = null, action) {
  switch (action.type) {
    case types.SET_MOVE_DIRECTION:
      return action.moveDirection;
    default:
      return state;
  }
}

export default moveDirection