import React from 'react'
import { Link } from 'react-router-dom'
import './InfoList.scss'
function InfoList(props) {
  const { MsgList, setShowOpen, showOpen, setMsgList } = props

  const sortBy = (key) =>
    setMsgList(
      MsgList.data.sort((a, b) => {
        console.log(typeof parseFloat(a[key]))
        return parseFloat(a[key] > parseFloat(b[key]))
      })
    )

  return (
    <>
      <div className="listTitle">
        <span>訊息列表</span>
        <span onClick={() => sortBy('time')}>時間排序</span>
      </div>

      {MsgList.data.map((item, index) => (
        <div
          key={index}
          className="listItem"
          style={{
            backgroundColor:
              index + 1 === +props.match.params.id ? '#dddddd' : '#ffffff',
          }}
        >
          <Link
            to={`/${index + 1}`}
            className="listLink"
            onClick={() => setShowOpen(!showOpen)}
          >
            <div className="msgTitle">
              <div style={{ fontWeight: '600' }}>{item.name}</div>
              <div>{item.time}</div>
            </div>
            <div className="listMsg">{item.msg}</div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default InfoList
