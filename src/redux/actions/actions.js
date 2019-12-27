import { ADD1, ADD2, SUB1, SUB2, ADDNUM1, ADDNUM2 } from "./actionTypes";

export function add1() {
  return {
    type: ADD1
  };
}

export function add2() {
  return {
    type: ADD2
  };
}

export function sub1() {
  return {
    type: SUB1
  };
}

export function sub2() {
  return {
    type: SUB2
  };
}

export function addNum1(number) {
  return {
    type: ADDNUM1,
    payload: number
  };
}

export function addNum2(number) {
  return {
    type: ADDNUM2,
    payload: number
  };
}

export function asyncAdd(number) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addNum1(number))
    }, 1000)
  }
}
