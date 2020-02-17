import React from 'react'
import Square from './Square'

function Board (props) {
  let {layout, handleClick, handleTouchStart, handleTouchMove, handleTouchEnd, startPos, moveToPos,} = props
  return (
    <div className="board">
      {
        layout.map((rowArr, rowIndex) => {
          return rowArr.map((item, columnIndex) => (
            <Square key={columnIndex}
                    name={item ? item.name : null}
                    id={item ? item.id : null}
                    handleClick={handleClick}
                    handleTouchStart={handleTouchStart}
                    handleTouchMove={handleTouchMove}
                    handleTouchEnd={handleTouchEnd}
                    startPos={startPos}
                    moveToPos={moveToPos}
                    layout={layout}
                    index={[rowIndex, columnIndex]}
            />
          ))
        })
      }
    </div>
  
  )
}

export default Board