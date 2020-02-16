import React from 'react'
import Square from './Square'

function Board (props) {
  let {layout} = props
  return (
    <div className="board">
      {
        layout.map(rowArr => {
          return rowArr.map((item, index) => (
            <Square key={index}
                    name={item ? item.name : null}
                    id={item ? item.id : null}
            />
          ))
        })
      }
    </div>
  
  )
}

export default Board