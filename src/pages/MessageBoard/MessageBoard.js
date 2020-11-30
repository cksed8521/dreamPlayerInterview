import React from 'react'

import Container from '@material-ui/core/Container'
import InputMessage from '../../components/InputMessage/InputMessage'
import Messages from '../../components/Messages'

import './MessageBoard.scss'

const MessageBoard = (props) => {
  return (
    <>
      <Container>
        <div className="outBoard">
          <InputMessage />
          <Messages />
        </div>
      </Container>
    </>
  )
}

export default MessageBoard
