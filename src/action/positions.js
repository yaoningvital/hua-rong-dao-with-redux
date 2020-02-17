import * as types from './constants'

console.log('types:', types)

/**
 * 设置 滑动时的 开始坐标
 * @param startPos
 * @returns {{type: string, startPos: *}}
 */
export function setStartPos (startPos) {
  return {
    type: types.SET_START_POS,
    startPos
  }
}

/**
 * 设置 滑动时的 移动时的坐标
 * @param moveToPos
 * @returns {{moveToPos: *, type: string}}
 */
export function setMoveToPos (moveToPos) {
  return {
    type: types.SET_MOVE_TO_POS,
    moveToPos
  }
}

/**
 * 设置滑动的方向
 * @param moveDirection: left | right | top | bottom
 * @returns {{moveDirection: *, type: string}}
 */
// export function setMoveDirection (moveDirection) {
//   return {
//     type: types.SET_MOVE_DIRECTION,
//     moveDirection
//   }
// }