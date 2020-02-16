const initialLayout = [
  [
    {name: 'zhangfei', id: 1},
    {name: 'caocao', id: 1},
    {name: 'caocao', id: 2},
    {name: 'machao', id: 1}
  ],
  [
    {name: 'zhangfei', id: 2},
    {name: 'caocao', id: 3},
    {name: 'caocao', id: 4},
    {name: 'machao', id: 2},
  ],
  [
    {name: 'huangzhong', id: 1},
    null,
    null,
    {name: 'zhaoyun', id: 1},
  ],
  [
    {name: 'huangzhong', id: 2},
    {name: 'guanyu', id: 1},
    {name: 'guanyu', id: 2},
    {name: 'zhaoyun', id: 2},
  ],
  [
    {name: 'bing', id: 1},
    {name: 'bing', id: 1},
    {name: 'bing', id: 1},
    {name: 'bing', id: 1},
  ]
]

function layout (state = initialLayout, action) {
  switch (action.type) {
    case 'UPDATE_LAYOUT':
      return action.layout;
    default:
      return state;
  }
}

export default layout