import React from 'react'
import Board from './Board'
import ExitImg from '../static/images/exit.png'
import ShengZiImg from '../static/images/shengzi.png'
import SucceedMask from './SucceedMask'

function Game (props) {
  let {layout, moveStepsNum, handleClick, handleTouchStart, handleTouchMove, handleTouchEnd, startPos, moveToPos, successful} = props
  let ExitImgWidth = document.body.clientWidth * 0.76 * 0.5 + 'px'
  
  return (
    <div className="game">
      {/*游戏名称*/}
      <div className="game-name">
        <img src={ShengZiImg} alt=""
        />
        <div className="name">华容道</div>
      </div>
      {/*移动步数*/}
      <div className="move-steps-num">
        <h4>移动步数</h4>
        <span>{moveStepsNum}</span>
      </div>
      {/*棋盘*/}
      <div className="board-area">
        <Board layout={layout}
               handleClick={handleClick}
               handleTouchStart={handleTouchStart}
               handleTouchMove={handleTouchMove}
               handleTouchEnd={handleTouchEnd}
               startPos={startPos}
               moveToPos={moveToPos}
        />
        <img src={ExitImg} alt=""
             className="exit-img"
             style={{
               width: ExitImgWidth
             }}
        />
      </div>
      {/*  按钮*/}
      <div className="btns">
        <button>返回上一步</button>
        <button>重玩</button>
      </div>
      {/*  通关提示层*/}
      <SucceedMask showModal={successful}/>
    </div>
  )
}

export default Game