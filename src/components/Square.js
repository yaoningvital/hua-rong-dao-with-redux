import React from 'react'
import ZhangFei_1 from '../static/images/zhangfei_1.jpg'
import ZhangFei_2 from '../static/images/zhangfei_2.jpg'
import CaoCao_1 from '../static/images/caocao_1.jpg'
import CaoCao_2 from '../static/images/caocao_2.jpg'
import CaoCao_3 from '../static/images/caocao_3.jpg'
import CaoCao_4 from '../static/images/caocao_4.jpg'
import MaChao_1 from '../static/images/machao_1.jpg'
import MaChao_2 from '../static/images/machao_2.jpg'
import HuangZhong_1 from '../static/images/huangzhong_1.jpg'
import HuangZhong_2 from '../static/images/huangzhong_2.jpg'
import GuanYu_1 from '../static/images/guanyu_1.jpg'
import GuanYu_2 from '../static/images/guanyu_2.jpg'
import ZhaoYun_1 from '../static/images/zhaoyun_1.jpg'
import ZhaoYun_2 from '../static/images/zhaoyun_2.jpg'
import Bing_1 from '../static/images/bing.jpg'
import CaoYing_1 from '../static/images/caoying_bg_1.jpg'
import CaoYing_2 from '../static/images/caoying_bg_2.jpg'

function Square (props) {
  let {
    name, id, handleClick, handleTouchStart,
    handleTouchMove, handleTouchEnd, startPos, moveToPos,
    layout, index, isShowHowing
  } = props
  let [rowIndex, columnIndex] = index
  let width = (document.body.clientWidth * 0.76) / 4 + 'px'
  let imageSrc = null
  
  if (rowIndex === 4 && columnIndex === 1 && name === null) {
    imageSrc = CaoYing_1
  } else if (rowIndex === 4 && columnIndex === 2 && name === null) {
    imageSrc = CaoYing_2
  }
  
  if (name === 'zhangfei' && id === 1) {
    imageSrc = ZhangFei_1
  } else if (name === 'zhangfei' && id === 2) {
    imageSrc = ZhangFei_2
  } else if (name === 'caocao' && id === 1) {
    imageSrc = CaoCao_1
  } else if (name === 'caocao' && id === 2) {
    imageSrc = CaoCao_2
  } else if (name === 'caocao' && id === 3) {
    imageSrc = CaoCao_3
  } else if (name === 'caocao' && id === 4) {
    imageSrc = CaoCao_4
  } else if (name === 'machao' && id === 1) {
    imageSrc = MaChao_1
  } else if (name === 'machao' && id === 2) {
    imageSrc = MaChao_2
  } else if (name === 'huangzhong' && id === 1) {
    imageSrc = HuangZhong_1
  } else if (name === 'huangzhong' && id === 2) {
    imageSrc = HuangZhong_2
  } else if (name === 'guanyu' && id === 1) {
    imageSrc = GuanYu_1
  } else if (name === 'guanyu' && id === 2) {
    imageSrc = GuanYu_2
  } else if (name === 'zhaoyun' && id === 1) {
    imageSrc = ZhaoYun_1
  } else if (name === 'zhaoyun' && id === 2) {
    imageSrc = ZhaoYun_2
  } else if (name === 'bing') {
    imageSrc = Bing_1
  }
  
  return (
    <div className="square"
         style={{
           width: width,
           height: width,
         }}
    >
      <img src={imageSrc} alt=""
           style={{
             width: width,
             height: width,
             display: imageSrc ? 'block' : 'none'
           }}
           onTouchStart={(e) => handleTouchStart(e, isShowHowing)}
           onTouchMove={(e) => handleTouchMove(e, isShowHowing)}
           onTouchEnd={(e) => {
             handleTouchEnd(e, {name, id, startPos, moveToPos, layout, isShowHowing})
           }}
           onClick={(e) => handleClick(e, name, id, isShowHowing)}
      />
    </div>
  )
}

export default Square