import { combineReducers } from 'redux'
import layout from './layout'
import moveStepsNum from './moveStepsNum'
import startPos from './startPos'
import moveToPos from './moveToPos'
import successful from './successful'

export default combineReducers({
  layout,
  moveStepsNum,
  startPos,
  moveToPos,
  successful
})