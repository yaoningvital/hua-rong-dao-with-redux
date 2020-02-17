import * as types from './types'


export function addHistory (newLayout) {
  return {
    type: types.ADD_HISTORY,
    layout: newLayout
  }
}

export function popHistory () {
  return {
    type: types.POP_HISTORY
  }
}

export function clearHistory () {
  return {
    type: types.CLEAR_HISTORY
  }
}