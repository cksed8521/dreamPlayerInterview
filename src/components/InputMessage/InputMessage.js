import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { addMessage } from '../../redux/actions/message'
import { useDispatch } from 'react-redux'
import './InputMessage.scss'

function InputMessage(props) {
  const [sendInput, setSendInput] = useState('')
  const dispatch = useDispatch()

  return (
    <>
      <div className="sendContain">
        <textarea
          type="text"
          placeholder="請輸人內容"
          value={sendInput}
          onChange={(e) => setSendInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && e.target.value) {
              if (sendInput)
                dispatch(
                  addMessage({
                    text: sendInput,
                    replyArray: [],
                  })
                )
              setSendInput('')
            }
          }}
        ></textarea>
        <div className="sendBtn">
          <Button
            onClick={() => {
              if (sendInput)
                dispatch(
                  addMessage({
                    text: sendInput,
                    replyArray: [],
                  })
                )
              setSendInput('')
            }}
            // variant="contained"
            // color="primary"
          >
            留言
          </Button>
        </div>
      </div>
    </>
  )
}

export default InputMessage
