import { combineReducers } from 'redux'
import startPos from './startPos'
import moveToPos from './moveToPos'
import successful from './successful'
import layoutHistory from './layoutHistory'

export default combineReducers({
  startPos,
  moveToPos,
  successful,
  layoutHistory
})