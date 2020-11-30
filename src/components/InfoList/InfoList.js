import React from 'react'
import { Link } from 'react-router-dom'
import './InfoList.scss'
function InfoList(props) {
  const { MsgList, setShowOpen, showOpen } = props

  return (
    <div>
      {MsgList.map((item, index) => (
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
    </div>
  )
}

export default InfoList
