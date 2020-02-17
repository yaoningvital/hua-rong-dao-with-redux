import * as types from '../action/types'

const initialStartPos = {
  pageX: 0,
  pageY: 0
}

function startPos (state = initialStartPos, action) {
  switch (action.type) {
    case types.SET_START_POS:
      return action.startPos
    default:
      return state
  }
}

export default startPos