import * as types from '../action/constants'

const initialMoveToPos = {
  pageX: 0,
  pageY: 0
}

function moveToPos (state = initialMoveToPos, action) {
  switch (action.type) {
    case types.SET_MOVE_TO_POS:
      return action.moveToPos;
    default:
      return state;
  }
}

export default moveToPos