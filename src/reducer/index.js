import { combineReducers } from 'redux'
import layout from './layout'
import moveStepsNum from './moveStepsNum'
import startPos from './startPos'
import moveToPos from './moveToPos'
// import moveDirection from './moveDirection'

export default combineReducers({
  layout,
  moveStepsNum,
  startPos,
  moveToPos,
  // moveDirection
})