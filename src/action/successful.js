import * as types from './constants'

export function setSuccessful (successful) {
  return {
    type: types.SET_SUCCESSFUL,
    successful
  }
}