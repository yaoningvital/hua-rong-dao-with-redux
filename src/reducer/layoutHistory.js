import * as types from '../action/types'
// import { test } from '../utils/layouts'
import { hengDaoLiMa } from '../utils/layouts'

// const initialLayoutHistory = [test]
const initialLayoutHistory = [hengDaoLiMa]

function layoutHistory (state = initialLayoutHistory, action) {
  switch (action.type) {
    case types.ADD_HISTORY:
      return [...state, action.layout]
    case types.POP_HISTORY:
      return state.slice(0, state.length - 1)
    default:
      return state
  }
}

export default layoutHistory