import { connect } from 'react-redux'
import Game from '../components/Game'
import { setMoveDirection, setMoveToPos, setStartPos } from '../action/positions'

const mapStateToProps = state => ({
  layout: state.layout,
  moveStepsNum: state.moveStepsNum,
  startPos: state.startPos,
  moveToPos: state.moveToPos,
  moveDirection: state.moveDirection,
})

const mapDispatchToProps = dispatch => ({
  handleClick: (name, id) => handleClick(name, id),
  handleTouchStart: (e, name, id) => handleTouchStart(dispatch, e, name, id),
  handleTouchMove: (e, name, id) => handleTouchMove(dispatch, e, name, id),
  handleTouchEnd: (e, {name, id, startPos, moveToPos}) => handleTouchEnd(dispatch, e, {name, id, startPos, moveToPos}),
})

function handleClick (e, name, id) {
  console.log('click e:', e)
  console.log('click name:', name)
  console.log('click id:', id)
}

function handleTouchStart (dispatch, e, name, id) {
  let startPos = {
    pageX: e.targetTouches[0].pageX,
    pageY: e.targetTouches[0].pageY,
  }
  dispatch(setStartPos(startPos))
  
}

function handleTouchMove (dispatch, e, name, id) {
  e.preventDefault()
  // console.log('touchMove e.targetTouches[0].pageX:', e.targetTouches[0].pageX)
  // console.log('touchMove e.targetTouches[0].pageY:', e.targetTouches[0].pageY)
  let moveToPos = {
    pageX: e.targetTouches[0].pageX,
    pageY: e.targetTouches[0].pageY,
  }
  dispatch(setMoveToPos(moveToPos))
  
}

function handleTouchEnd (dispatch, e, {name, id, startPos, moveToPos}) {
  // console.log('touchEnd e.targetTouches:', e.targetTouches)
  // console.log('touchEnd e.targetTouches.length:', e.targetTouches.length)
  console.log('startPos.pageX:', startPos.pageX)
  console.log('startPos.pageY:', startPos.pageY)
  console.log('moveToPos.pageX:', moveToPos.pageX)
  console.log('moveToPos.pageY:', moveToPos.pageY)
  let moveAxis = null
  let moveDirection = null
  let xDistance = startPos.pageX - moveToPos.pageX
  let yDistance = startPos.pageY - moveToPos.pageY
  moveAxis = Math.abs(xDistance) > Math.abs(yDistance) ? 'horizontal' : 'vertical' // 手指滑动的方向（水平方向 or 垂直方向）
  
  if (moveAxis === 'horizontal') { // 水平方向滑动
    if (xDistance < -10) { // 往右移
      console.log('往右移')
      moveDirection = 'right'
      dispatch(setMoveDirection('right'))
    } else if (xDistance > 10) { // 往左移
      console.log('往左移')
      moveDirection = 'left'
      dispatch(setMoveDirection('left'))
    }
  } else if (moveAxis === 'vertical') { // 垂直方向移动
    if (yDistance < -10) { // 往下移
      console.log('往下移')
      moveDirection = 'bottom'
      dispatch(setMoveDirection('bottom'))
    } else if (yDistance > 10) { // 往上移
      console.log('往上移')
      moveDirection = 'top'
      dispatch(setMoveDirection('top'))
    }
  }
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)