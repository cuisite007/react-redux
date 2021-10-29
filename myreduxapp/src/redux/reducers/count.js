import {INCREMENT, DECREMENT} from '../constants'

const initial = 0;
export default function countReducer(preState = initial, action){
  const {type, data} = action
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return  preState - data;
    default:
      return preState;
  }
}
