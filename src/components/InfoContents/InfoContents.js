import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import './InfoContents.scss'

function InfoContents(props) {
  const { MsgList, setShowOpen, showOpen } = props
  const [showMsg, setShowMsg] = useState('')

  useEffect(() => {
    setShowMsg(MsgList.filter((value) => value.id === props.match.params.id))
  }, [props.match.params.id])

  return (
    <div style={{ padding: '16px 50px 16px 16px' }}>
      <div
        className="historyPage"
        style={{ marginBottom: '20px', cursor: 'pointer' }}
        onClick={() => setShowOpen(!showOpen)}
      >
        返回上一頁
      </div>
      {showMsg && (
        <>
          <div className="msgDetial-name">{showMsg[0].name}</div>
          <div className="msgDetial-msg">{showMsg[0].msg}</div>
        </>
      )}
    </div>
  )
}

export default InfoContents
