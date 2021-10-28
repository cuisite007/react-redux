/* 该文件用于创建一个为Count组件服务的reducer，reducer本质就是一个函数
    reducer函数会接受两个参数，分别是：之前的状态，（preState）；和动作对象（action）
*/

// 初始化状态
const initState = 0;
export default function countReducer(preState = initState, action) {
  const {type, data} = action
  switch(type) {
    case 'increment': //如果是加
      return preState + data
    case "decrement": //如果是减
      return preState - data
    default:
      return preState;
  }
}