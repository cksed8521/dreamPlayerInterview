export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'

export function addMessage(info) {
  return {
    type: ADD_MESSAGE,
    payload: info,
  }
}

export function deleteMessage(infoId) {
  return {
    type: DELETE_MESSAGE,
    payload: infoId,
  }
}
