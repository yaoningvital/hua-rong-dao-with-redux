import * as types from '../action/constants'
// import { hengDaoLiMa ,test} from '../utils/layouts'
import { test } from '../utils/layouts'


function layout (state = test, action) {
  switch (action.type) {
    case types.UPDATE_LAYOUT:
      return action.layout;
    default:
      return state;
  }
}

export default layout