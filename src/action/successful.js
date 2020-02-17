import * as types from './types'

export function setSuccessful (successful) {
  return {
    type: types.SET_SUCCESSFUL,
    successful
  }
}