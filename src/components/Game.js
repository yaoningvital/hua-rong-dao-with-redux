import React from 'react'
import Board from './Board'
import ExitImg from '../static/images/exit.png'
import ShengZiImg from '../static/images/shengzi.png'
import SucceedMask from './SucceedMask'

function Game (props) {
  let {
    layoutHistory, handleClick, handleTouchStart,
    handleTouchMove, handleTouchEnd, startPos, moveToPos,
    successful, replay, goBack, handleShowHow,
    isShowHowing, isTouchEvent
  } = props
  let ExitImgWidth = document.body.clientWidth * 0.76 * 0.5 + 'px'
  
  return (
    <div className="game">
      {/*演示*/}
      <div className="show-how">
        <button onClick={() => handleShowHow(layoutHistory[layoutHistory.length - 1])} disabled={isShowHowing}>演示
        </button>
      </div>
      {/*游戏名称*/}
      <div className="game-name">
        <img src={ShengZiImg} alt=""/>
        <div className="name">华容道</div>
      </div>
      {/*移动步数*/}
      <div className="move-steps-num">
        <h4>移动步数</h4>
        <span>{layoutHistory.length - 1}</span>
      </div>
      {/*棋盘*/}
      <div className="board-area">
        <Board layout={layoutHistory[layoutHistory.length - 1]}
               handleClick={handleClick}
               handleTouchStart={handleTouchStart}
               handleTouchMove={handleTouchMove}
               handleTouchEnd={handleTouchEnd}
               startPos={startPos}
               moveToPos={moveToPos}
               isShowHowing={isShowHowing}
               isTouchEvent={isTouchEvent}
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
        <button onClick={goBack} disabled={isShowHowing || layoutHistory.length === 1}>返回上一步</button>
        <button onClick={replay} disabled={isShowHowing}>重玩</button>
      </div>
      {/*  通关提示层*/}
      <SucceedMask showModal={successful}
                   replay={replay}
                   stepsNum={layoutHistory.length - 1}
                   isShowHowing={isShowHowing}
      />
    </div>
  )
}

export default Game