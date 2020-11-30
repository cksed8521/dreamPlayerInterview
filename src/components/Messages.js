import React from 'react'
import MessageItem from './MessageItem/MessageItem'
import ScrollToBottom from 'react-scroll-to-bottom'
import { useSelector } from 'react-redux'
import './Messages.scss'

function Messages(props) {
  let messageList = useSelector((state) => state.messageList)

  return (
    <ScrollToBottom className="Scrollheight">
      {messageList.length ? (
        messageList.map((item, index) => (
          <div key={index} className="Msgboard">
            <MessageItem id={index} item={item} />
          </div>
        ))
      ) : (
        <div className="noMsg">目前沒有訊息</div>
      )}
    </ScrollToBottom>
  )
}

export default Messages
