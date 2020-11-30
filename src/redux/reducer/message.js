import { combineReducers } from 'redux'
import { ADD_MESSAGE, DELETE_MESSAGE } from '../actions/message'

const initialState = [
  {
    text: 'iphone12',
    replyArray: [],
  },
]

function messageList(state = initialState, action) {
  let newMessageList
  switch (action.type) {
    case ADD_MESSAGE:
      newMessageList = [...state]
      newMessageList.push(action.payload)
      return newMessageList

    case DELETE_MESSAGE:
      newMessageList = [...state]
      newMessageList = newMessageList.filter(
        (item) => item.text !== action.payload
      )
      return newMessageList

    default:
      return state
  }
}

export const rootReducer = combineReducers({
  messageList,
})
