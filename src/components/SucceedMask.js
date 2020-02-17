import React from 'react'
import { Modal } from 'antd-mobile';

function onWrapTouchStart (e) {
  // fix touch to scroll background page on iOS
  if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
    return;
  }
  const pNode = closest(e.target, '.am-modal-content');
  if (!pNode) {
    e.preventDefault();
  }
}

function closest (el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}


function SucceedMask (props) {
  let {showModal, replay} = props
  return (
    <div className="succeed-mask">
      <Modal
        visible={showModal}
        transparent
        maskClosable={false}
        wrapProps={{onTouchStart: onWrapTouchStart}}
      >
        <div className="content-wrap">
          <h4>已通关</h4>
          <p>移动步数：10</p>
          <div className="btns">
            <button onClick={replay}>重玩</button>
            <button>好的</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default SucceedMask