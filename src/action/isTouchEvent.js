import * as types from './types'

export function setIsTouchEvent (isTouchEvent) {
  return {
    type: types.SET_IS_TOUCH_EVENT,
    isTouchEvent
  }
}