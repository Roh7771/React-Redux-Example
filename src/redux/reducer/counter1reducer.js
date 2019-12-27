import { ADD1, SUB1, ADDNUM1 } from "../actions/actionTypes"

const initialState = {
  counter: 0
}

export default function counter1Reducer(state = initialState, action) {
  switch (action.type) {
    case ADD1:
      return {
        counter: state.counter + 1
      }
    case SUB1:
      return {
        counter: state.counter - 1
      }
    case ADDNUM1:
      return {
        counter: state.counter + action.payload
      }
    default:
      return state
  } 
}