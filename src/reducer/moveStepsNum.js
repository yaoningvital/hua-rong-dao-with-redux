function moveStepsNum (state = 0, action) {
  switch (action.type) {
    case 'INCRESE_MOVE_STEPS_NUM':
      return state + 1;
    case 'DECRESE_MOVE_STEPS_NUM':
      return state - 1;
    default:
      return state
    
  }
}


export default moveStepsNum