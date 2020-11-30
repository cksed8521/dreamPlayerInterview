import React, { useState } from 'react'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addMessage, deleteMessage } from '../../redux/actions/message'
import './MessageItem.scss'

function MessageItem(props) {
  const { id, item } = props
  const [replyInput, setReplyInput] = useState('')
  const [reply, setReply] = useState(false)
  let messageList = useSelector((state) => state.messageList)
  const dispatch = useDispatch()

  // Show ReplyInput
  const handleShowReplay = () => {
    setReply(!reply)
  }

  // Enter Reply Content
  function handleReplyMessage() {
    const cloneMessageList = Object.assign([], messageList)
    cloneMessageList.find((el, index) => {
      if (id === index) {
        el.replyArray = [
          ...el.replyArray,
          {
            text: replyInput,
          },
        ]
      }
      addMessage(cloneMessageList)
      setReplyInput('')
      setReply(false)
    })
  }

  return (
    <>
      <div className="messageItem">
        <div className="textCtn">{item.text}</div>
        <div className="Btnarea">
          <div
            className="delBtn"
            onClick={() => dispatch(deleteMessage(item.text))}
          >
            X
          </div>
        </div>
      </div>
      <div className="replyBtn" onClick={handleShowReplay}>
        回覆
      </div>

      {reply && (
        <div className="replyInp">
          <input
            value={replyInput}
            onChange={(e) => setReplyInput(e.target.value)}
            placeholder="請輸入留言"
          ></input>
          <RiSendPlane2Fill
            onClick={handleReplyMessage}
            size={20}
            style={{
              transform: 'translateY(5px)',
              cursor: 'pointer',
            }}
          />
        </div>
      )}

      {/* show Resopnse Area */}
      {item.replyArray &&
        item.replyArray.map((item, index) => {
          return (
            <div key={index} className="replyCtn">
              {item.text}
            </div>
          )
        })}
    </>
  )
}

export default MessageItem
