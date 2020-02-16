import React from 'react'
import Square from './Square'

function Board (props) {
  let {layout, handleClick, handleTouchStart, handleTouchMove, handleTouchEnd, startPos, moveToPos, moveDirection} = props
  return (
    <div className="board">
      {
        layout.map(rowArr => {
          return rowArr.map((item, index) => (
            <Square key={index}
                    name={item ? item.name : null}
                    id={item ? item.id : null}
                    handleClick={handleClick}
                    handleTouchStart={handleTouchStart}
                    handleTouchMove={handleTouchMove}
                    handleTouchEnd={handleTouchEnd}
                    startPos={startPos}
                    moveToPos={moveToPos}
                    moveDirection={moveDirection}
            />
          ))
        })
      }
    </div>
  
  )
}

export default Board