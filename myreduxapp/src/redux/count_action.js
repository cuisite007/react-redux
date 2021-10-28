/* 该文件专门为Count组件生成action对象 */

// 引入常量文件
import { INCREMENT, DECREMENT } from './constant'
/* function createIncrementAction(data) {
  return {type: "increment", data}
} */
export const createIncrementAction = data => ({ type: INCREMENT, data })

/* export function createDecrementAction(data) {
  return {type:"decrement", data}
} */
export const createDecrementAction = data => ({ type: DECREMENT, data })