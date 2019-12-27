import { combineReducers } from "redux";
import counter1Reducer from "./reducer/counter1reducer";
import counter2Reducer from "./reducer/counter2reducer";

export default combineReducers({
  counter1Reducer,
  counter2Reducer
});
