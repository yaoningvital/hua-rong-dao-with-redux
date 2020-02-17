import * as types from './constants'

export function setLayout (layout) {
  return {
    type: types.UPDATE_LAYOUT,
    layout
  }
}