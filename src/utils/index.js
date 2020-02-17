/**
 * 返回name和id对应的那个方块的索引[rowIndex,columnIndex]
 * @param layout
 * @param name
 * @param id
 * @returns {number[]}
 */
export function getIndex (layout, name, id) {
  for (let i = 0; i < layout.length; i++) {
    for (let j = 0; j < layout[i].length; j++) {
      if (layout[i][j] && layout[i][j].name === name && layout[i][j].id === id) {
        return [i, j]
      }
    }
  }
}

/**
 * 返回 像张飞这样的两个块连在一起的 另一个块的索引
 * @param layout
 * @param name
 * @param id
 * @returns {number[]}
 */
export function getBrotherIndex (layout, name, id) {
  for (let i = 0; i < layout.length; i++) {
    for (let j = 0; j < layout[i].length; j++) {
      if (layout[i][j] && layout[i][j].name === name && layout[i][j].id !== id) {
        return [i, j]
      }
    }
  }
}

/**
 * 返回 当前layout下，曹操的四个索引 ，格式：[[0,1],[0,2],[1,1],[1,2]]
 * @param layout
 * @returns {[]}
 */
export function getCaoCaoIndices (layout) {
  let caoCaoIndices = []
  for (let i = 0; i < layout.length; i++) {
    for (let j = 0; j < layout[i].length; j++) {
      if (layout[i][j] && layout[i][j].name === 'caocao') {
        caoCaoIndices.push([i, j])
        if (caoCaoIndices.length === 4) {
          return caoCaoIndices
        }
      }
    }
  }
}

