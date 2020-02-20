import { combineReducers } from 'redux'
import startPos from './startPos'
import moveToPos from './moveToPos'
import successful from './successful'
import layoutHistory from './layoutHistory'
import isShowHowing from './isShowHowing'
import isTouchEvent from './isTouchEvent'

export default combineReducers({
  startPos,
  moveToPos,
  successful,
  layoutHistory,
  isShowHowing,
  isTouchEvent,
})