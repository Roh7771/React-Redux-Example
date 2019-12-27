import { ADD2, SUB2, ADDNUM2 } from "../actions/actionTypes"

const initialState = {
  counter: 200
}

export default function counter2Reducer(state = initialState, action) {
  switch (action.type) {
    case ADD2:
      return {
        counter: state.counter + 1
      }
    case SUB2:
      return {
        counter: state.counter - 1
      }
    case ADDNUM2:
      return {
        counter: state.counter + action.payload
      }
    default:
      return state
  } 
}