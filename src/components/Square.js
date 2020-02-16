import React from 'react'
import ZhangFei_1 from '../static/images/zhangfei_1.png'
import ZhangFei_2 from '../static/images/zhangfei_2.png'
import CaoCao_1 from '../static/images/caocao_1.png'
import CaoCao_2 from '../static/images/caocao_2.png'
import CaoCao_3 from '../static/images/caocao_3.png'
import CaoCao_4 from '../static/images/caocao_4.png'
import MaChao_1 from '../static/images/machao_1.png'
import MaChao_2 from '../static/images/machao_2.png'
import HuangZhong_1 from '../static/images/huangzhong_1.png'
import HuangZhong_2 from '../static/images/huangzhong_2.png'
import GuanYu_1 from '../static/images/guanyu_1.png'
import GuanYu_2 from '../static/images/guanyu_2.png'
import ZhaoYun_1 from '../static/images/zhaoyun_1.png'
import ZhaoYun_2 from '../static/images/zhaoyun_2.png'
import Bing_1 from '../static/images/bing_1.png'

function Square (props) {
  let {name, id} = props
  let width = (document.body.clientWidth * 0.92) / 4 + 'px'
  let imageSrc = 'linear-gradient(#7d4536, #662e1e)'
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
  } else if (name === 'bing' && id === 1) {
    imageSrc = Bing_1
  }
  
  return (
    <div className="square"
         style={{
           width: width,
           height: width,
           // backgroundImage: 'linear-gradient(#7d4536, #662e1e)'
         }}
    >
      <img src={imageSrc} alt=""
           style={{
             width: width,
             height: width,
             display: imageSrc ? 'block' : 'none'
           }}
      />
    </div>
  )
}

export default Square