import { connect } from 'react-redux'
import Game from '../components/Game'
import { setMoveToPos, setStartPos } from '../action/positions'
import { setLayout } from '../action/layout'
import { setSuccessful } from '../action/successful'
import _ from 'lodash'
import { getBrotherIndex, getCaoCaoIndices, getIndex } from '../utils'
import { test } from '../utils/layouts'

const mapStateToProps = state => ({
  layout: state.layout,
  moveStepsNum: state.moveStepsNum,
  startPos: state.startPos,
  moveToPos: state.moveToPos,
  successful: state.successful,
})

const mapDispatchToProps = dispatch => ({
  handleClick: (name, id) => handleClick(name, id),
  handleTouchStart: (e, name, id) => handleTouchStart(dispatch, e, name, id),
  handleTouchMove: (e, name, id) => handleTouchMove(dispatch, e, name, id),
  handleTouchEnd: (e, {name, id, startPos, moveToPos, layout}) => handleTouchEnd(dispatch, e, {
    name,
    id,
    startPos,
    moveToPos,
    layout
  }),
  replay: () => handleReplay(dispatch),
})

function handleClick (e, name, id) {
  console.log('click e:', e)
  console.log('click name:', name)
  console.log('click id:', id)
}

function handleTouchStart (dispatch, e, name, id) {
  console.log('touchStart')
  let startPos = {
    pageX: e.targetTouches[0].pageX,
    pageY: e.targetTouches[0].pageY,
  }
  dispatch(setStartPos(startPos))
  
}

function handleTouchMove (dispatch, e, name, id) {
  console.log('touchMove')
  e.preventDefault()
  // console.log('touchMove e.targetTouches[0].pageX:', e.targetTouches[0].pageX)
  // console.log('touchMove e.targetTouches[0].pageY:', e.targetTouches[0].pageY)
  let moveToPos = {
    pageX: e.targetTouches[0].pageX,
    pageY: e.targetTouches[0].pageY,
  }
  dispatch(setMoveToPos(moveToPos))
  
}

function handleTouchEnd (dispatch, e, {name, id, startPos, moveToPos, layout}) {
  console.log('touchEnd')
  let moveAxis = null
  let moveDirection = null
  let xDistance = startPos.pageX - moveToPos.pageX
  let yDistance = startPos.pageY - moveToPos.pageY
  moveAxis = Math.abs(xDistance) > Math.abs(yDistance) ? 'horizontal' : 'vertical' // 手指滑动的方向（水平方向 or 垂直方向）
  
  if (moveAxis === 'horizontal') { // 水平方向滑动
    if (xDistance < -10) { // 往右移
      console.log('往右移')
      moveDirection = 'right'
    } else if (xDistance > 10) { // 往左移
      console.log('往左移')
      moveDirection = 'left'
    }
  } else if (moveAxis === 'vertical') { // 垂直方向移动
    // console.log('yDistance:', yDistance)
    if (yDistance < -10) { // 往下移
      console.log('往下移')
      moveDirection = 'bottom'
    } else if (yDistance > 10) { // 往上移
      console.log('往上移')
      moveDirection = 'top'
    }
  }
  
  if (moveDirection) {
    let newLayout = updateLayout(dispatch, layout, name, id, moveDirection)
    if (hasSucceed(newLayout)) {
      dispatch(setSuccessful(true))
    }
  }
}

/**
 * 更新layout
 * @param oldLayout: 老的layout
 * @param name: 目标滑块名称
 * @param id：目标滑块id
 * @param moveDirection: 滑动方向
 */
function updateLayout (dispatch, oldLayout, name, id, moveDirection) {
  let newLayout = _.cloneDeep(oldLayout)
  let [tRowIndex, tColumnIndex] = getIndex(newLayout, name, id) // 滑动的这个块 所在的索引
  
  // 移动的是 竖向的 两格 角色
  if (name === 'zhangfei' || name === 'machao' || name === 'huangzhong' || name === 'zhaoyun') {
    let [bRowIndex, bColumnIndex] = getBrotherIndex(newLayout, name, id) // 滑动块的 兄弟块 所在的索引
    if (moveDirection === 'left') { // 要向左移动
      if (tColumnIndex - 1 >= 0 &&
        newLayout[tRowIndex][tColumnIndex - 1] === null &&
        newLayout[bRowIndex][bColumnIndex - 1] === null) { // 可以往左移动
        newLayout[tRowIndex][tColumnIndex - 1] = _.cloneDeep(newLayout[tRowIndex][tColumnIndex])
        newLayout[bRowIndex][bColumnIndex - 1] = _.cloneDeep(newLayout[bRowIndex][bColumnIndex])
        newLayout[tRowIndex][tColumnIndex] = null
        newLayout[bRowIndex][bColumnIndex] = null
      }
    } else if (moveDirection === 'right') { // 要向右移动
      if (tColumnIndex + 1 <= 3 &&
        newLayout[tRowIndex][tColumnIndex + 1] === null &&
        newLayout[bRowIndex][bColumnIndex + 1] === null) { // 可以往右移动
        newLayout[tRowIndex][tColumnIndex + 1] = _.cloneDeep(newLayout[tRowIndex][tColumnIndex])
        newLayout[bRowIndex][bColumnIndex + 1] = _.cloneDeep(newLayout[bRowIndex][bColumnIndex])
        newLayout[tRowIndex][tColumnIndex] = null
        newLayout[bRowIndex][bColumnIndex] = null
      }
    } else if (moveDirection === 'top') { // 要向上移动
      if (Math.min(tRowIndex, bRowIndex) - 1 >= 0 &&
        newLayout[Math.min(tRowIndex, bRowIndex) - 1][tColumnIndex] === null) { // 可以向上移动
        newLayout[Math.min(tRowIndex, bRowIndex) - 1][tColumnIndex] = _.cloneDeep(newLayout[Math.min(tRowIndex, bRowIndex)][tColumnIndex])
        newLayout[Math.min(tRowIndex, bRowIndex)][tColumnIndex] = _.cloneDeep(newLayout[Math.max(tRowIndex, bRowIndex)][tColumnIndex])
        newLayout[Math.max(tRowIndex, bRowIndex)][tColumnIndex] = null
      }
    } else if (moveDirection === 'bottom') { // 要向下移动
      if (Math.max(tRowIndex, bRowIndex) + 1 <= 4 &&
        newLayout[Math.max(tRowIndex, bRowIndex) + 1][tColumnIndex] === null) { // 可以向下移动
        newLayout[Math.max(tRowIndex, bRowIndex) + 1][tColumnIndex] = _.cloneDeep(newLayout[Math.max(tRowIndex, bRowIndex)][tColumnIndex])
        newLayout[Math.max(tRowIndex, bRowIndex)][tColumnIndex] = _.cloneDeep(newLayout[Math.min(tRowIndex, bRowIndex)][tColumnIndex])
        newLayout[Math.min(tRowIndex, bRowIndex)][tColumnIndex] = null
      }
    }
  }
  // 移动的是 横向的 两格角色（关羽）
  else if (name === 'guanyu') {
    let [bRowIndex, bColumnIndex] = getBrotherIndex(newLayout, name, id) // 滑动块的 兄弟块 所在的索引
    if (moveDirection === 'left') {
      if (Math.min(tColumnIndex, bColumnIndex) - 1 >= 0 &&
        newLayout[tRowIndex][Math.min(tColumnIndex, bColumnIndex) - 1] === null) { // 可以向左移动
        newLayout[tRowIndex][Math.min(tColumnIndex, bColumnIndex) - 1] = _.cloneDeep(newLayout[tRowIndex][Math.min(tColumnIndex, bColumnIndex)])
        newLayout[tRowIndex][Math.min(tColumnIndex, bColumnIndex)] = _.cloneDeep(newLayout[tRowIndex][Math.max(tColumnIndex, bColumnIndex)])
        newLayout[tRowIndex][Math.max(tColumnIndex, bColumnIndex)] = null
      }
    } else if (moveDirection === 'right') {
      if (Math.max(tColumnIndex, bColumnIndex) + 1 <= 3 &&
        newLayout[tRowIndex][Math.max(tColumnIndex, bColumnIndex) + 1] === null) { // 可以向右移动
        newLayout[tRowIndex][Math.max(tColumnIndex, bColumnIndex) + 1] = _.cloneDeep(newLayout[tRowIndex][Math.max(tColumnIndex, bColumnIndex)])
        newLayout[tRowIndex][Math.max(tColumnIndex, bColumnIndex)] = _.cloneDeep(newLayout[tRowIndex][Math.min(tColumnIndex, bColumnIndex)])
        newLayout[tRowIndex][Math.min(tColumnIndex, bColumnIndex)] = null
      }
    } else if (moveDirection === 'top') {
      if (tRowIndex - 1 >= 0 &&
        newLayout[tRowIndex - 1][tColumnIndex] === null &&
        newLayout[bRowIndex - 1][bColumnIndex] === null) { // 可以向上移动
        newLayout[tRowIndex - 1][tColumnIndex] = _.cloneDeep(newLayout[tRowIndex][tColumnIndex])
        newLayout[bRowIndex - 1][bColumnIndex] = _.cloneDeep(newLayout[bRowIndex][bColumnIndex])
        newLayout[tRowIndex][tColumnIndex] = null
        newLayout[bRowIndex][bColumnIndex] = null
      }
    } else if (moveDirection === 'bottom') {
      if (tRowIndex + 1 <= 4 &&
        newLayout[tRowIndex + 1][tColumnIndex] === null &&
        newLayout[bRowIndex + 1][bColumnIndex] === null) { // 可以向下移动
        newLayout[tRowIndex + 1][tColumnIndex] = _.cloneDeep(newLayout[tRowIndex][tColumnIndex])
        newLayout[bRowIndex + 1][bColumnIndex] = _.cloneDeep(newLayout[bRowIndex][bColumnIndex])
        newLayout[tRowIndex][tColumnIndex] = null
        newLayout[bRowIndex][bColumnIndex] = null
      }
    }
  }
  // 移动的是 曹操
  else if (name === 'caocao') {
    let caoCaoIndices = getCaoCaoIndices(newLayout)
    if (moveDirection === 'left') {
      if (caoCaoIndices[0][1] - 1 >= 0 &&
        newLayout[caoCaoIndices[0][0]][caoCaoIndices[0][1] - 1] === null &&
        newLayout[caoCaoIndices[2][0]][caoCaoIndices[2][1] - 1] === null) { // 可以向左移动
        newLayout[caoCaoIndices[0][0]][caoCaoIndices[0][1] - 1] = _.cloneDeep(newLayout[caoCaoIndices[0][0]][caoCaoIndices[0][1]])
        newLayout[caoCaoIndices[2][0]][caoCaoIndices[2][1] - 1] = _.cloneDeep(newLayout[caoCaoIndices[2][0]][caoCaoIndices[2][1]])
        newLayout[caoCaoIndices[0][0]][caoCaoIndices[0][1]] = _.cloneDeep(newLayout[caoCaoIndices[1][0]][caoCaoIndices[1][1]])
        newLayout[caoCaoIndices[2][0]][caoCaoIndices[2][1]] = _.cloneDeep(newLayout[caoCaoIndices[3][0]][caoCaoIndices[3][1]])
        newLayout[caoCaoIndices[1][0]][caoCaoIndices[1][1]] = null
        newLayout[caoCaoIndices[3][0]][caoCaoIndices[3][1]] = null
      }
    } else if (moveDirection === 'right') {
      if (caoCaoIndices[1][1] + 1 <= 3 &&
        newLayout[caoCaoIndices[1][0]][caoCaoIndices[1][1] + 1] === null &&
        newLayout[caoCaoIndices[3][0]][caoCaoIndices[3][1] + 1] === null) { // 可以向右移动
        newLayout[caoCaoIndices[1][0]][caoCaoIndices[1][1] + 1] = _.cloneDeep(newLayout[caoCaoIndices[1][0]][caoCaoIndices[1][1]])
        newLayout[caoCaoIndices[3][0]][caoCaoIndices[3][1] + 1] = _.cloneDeep(newLayout[caoCaoIndices[3][0]][caoCaoIndices[3][1]])
        newLayout[caoCaoIndices[1][0]][caoCaoIndices[1][1]] = _.cloneDeep(newLayout[caoCaoIndices[0][0]][caoCaoIndices[0][1]])
        newLayout[caoCaoIndices[3][0]][caoCaoIndices[3][1]] = _.cloneDeep(newLayout[caoCaoIndices[2][0]][caoCaoIndices[2][1]])
        newLayout[caoCaoIndices[0][0]][caoCaoIndices[0][1]] = null
        newLayout[caoCaoIndices[2][0]][caoCaoIndices[2][1]] = null
      }
    } else if (moveDirection === 'top') {
      if (caoCaoIndices[0][0] - 1 >= 0 &&
        newLayout[caoCaoIndices[0][0] - 1][caoCaoIndices[0][1]] === null &&
        newLayout[caoCaoIndices[1][0] - 1][caoCaoIndices[1][1]] === null) { // 可以向上移动
        newLayout[caoCaoIndices[0][0] - 1][caoCaoIndices[0][1]] = _.cloneDeep(newLayout[caoCaoIndices[0][0]][caoCaoIndices[0][1]])
        newLayout[caoCaoIndices[1][0] - 1][caoCaoIndices[1][1]] = _.cloneDeep(newLayout[caoCaoIndices[1][0]][caoCaoIndices[1][1]])
        newLayout[caoCaoIndices[0][0]][caoCaoIndices[0][1]] = _.cloneDeep(newLayout[caoCaoIndices[2][0]][caoCaoIndices[2][1]])
        newLayout[caoCaoIndices[1][0]][caoCaoIndices[1][1]] = _.cloneDeep(newLayout[caoCaoIndices[3][0]][caoCaoIndices[3][1]])
        newLayout[caoCaoIndices[2][0]][caoCaoIndices[2][1]] = null
        newLayout[caoCaoIndices[3][0]][caoCaoIndices[3][1]] = null
      }
    } else if (moveDirection === 'bottom') {
      if (caoCaoIndices[2][0] + 1 <= 4 &&
        newLayout[caoCaoIndices[2][0] + 1][caoCaoIndices[2][1]] === null &&
        newLayout[caoCaoIndices[3][0] + 1][caoCaoIndices[3][1]] === null) { // 可以向下移动
        newLayout[caoCaoIndices[2][0] + 1][caoCaoIndices[2][1]] = _.cloneDeep(newLayout[caoCaoIndices[2][0]][caoCaoIndices[2][1]])
        newLayout[caoCaoIndices[3][0] + 1][caoCaoIndices[3][1]] = _.cloneDeep(newLayout[caoCaoIndices[3][0]][caoCaoIndices[3][1]])
        newLayout[caoCaoIndices[2][0]][caoCaoIndices[2][1]] = _.cloneDeep(newLayout[caoCaoIndices[0][0]][caoCaoIndices[0][1]])
        newLayout[caoCaoIndices[3][0]][caoCaoIndices[3][1]] = _.cloneDeep(newLayout[caoCaoIndices[1][0]][caoCaoIndices[1][1]])
        newLayout[caoCaoIndices[0][0]][caoCaoIndices[0][1]] = null
        newLayout[caoCaoIndices[1][0]][caoCaoIndices[1][1]] = null
      }
    }
  }
  // 移动的是 兵
  else if (name === 'bing') {
    if (moveDirection === 'left') {
      if (tColumnIndex - 1 >= 0 && newLayout[tRowIndex][tColumnIndex - 1] === null) { // 可以向左移动
        newLayout[tRowIndex][tColumnIndex - 1] = _.cloneDeep(newLayout[tRowIndex][tColumnIndex])
        newLayout[tRowIndex][tColumnIndex] = null
      }
    } else if (moveDirection === 'right') {
      if (tColumnIndex + 1 <= 3 && newLayout[tRowIndex][tColumnIndex + 1] === null) { // 可以向右移动
        newLayout[tRowIndex][tColumnIndex + 1] = _.cloneDeep(newLayout[tRowIndex][tColumnIndex])
        newLayout[tRowIndex][tColumnIndex] = null
      }
    } else if (moveDirection === 'top') {
      console.log('tRowIndex:', tRowIndex)
      console.log('tColumnIndex:', tColumnIndex)
      if (tRowIndex - 1 >= 0 && newLayout[tRowIndex - 1][tColumnIndex] === null) { // 可以向上移动
        console.log('可以向上移动')
        newLayout[tRowIndex - 1][tColumnIndex] = _.cloneDeep(newLayout[tRowIndex][tColumnIndex])
        newLayout[tRowIndex][tColumnIndex] = null
      }
    } else if (moveDirection === 'bottom') {
      if (tRowIndex + 1 <= 4 && newLayout[tRowIndex + 1][tColumnIndex] === null) { // 可以向下移动
        newLayout[tRowIndex + 1][tColumnIndex] = _.cloneDeep(newLayout[tRowIndex][tColumnIndex])
        newLayout[tRowIndex][tColumnIndex] = null
      }
    }
    
    
  }
  
  dispatch(setLayout(newLayout))
  return newLayout
}

/**
 * 判断当前布局 layout 中，曹操是否已经在曹营的位置，即游戏是否已经通关
 * @param layout
 */
function hasSucceed (layout) {
  return (layout[3][1] && layout[3][1].name === 'caocao') &&
    (layout[3][2] && layout[3][2].name === 'caocao') &&
    (layout[4][1] && layout[4][1].name === 'caocao') &&
    (layout[4][2] && layout[4][2].name === 'caocao')
}

function handleReplay (dispatch) {
  dispatch(setSuccessful(false))
  dispatch(setLayout(test))
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)