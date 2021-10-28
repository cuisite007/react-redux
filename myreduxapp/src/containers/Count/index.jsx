import React, { Component } from 'react'
//import store from "../../redux/store"
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsynAction
} from '../../redux/count_action'

// 引入connect 用于链接UI组件与redux
import {connect} from 'react-redux'

// a函数的返回的对象中的key作为传递给UI组件props的key，
//   value就作为传递给UI组件的props的value -----状态
/* function mapStateToPorps(state) {
  return {count : state}
} */
// b函数的返回的对象中的key作为传递给UI组件props的key，
//   value就作为传递给UI组件的props的value -----操作状态的方法
/* function mapDispatchToProps(dispatch) {
  return {
    jia:(data) => {dispatch(createIncrementAction(data))},
    jian:(data) => {dispatch(createDecrementAction(data))},
    jiaAsny:(data, time) => {dispatch(createIncrementAsynAction(data, time))}
  }
} */
class Count extends Component {
  state = { car : "rx5" }
  increment = () => {
    const {value} = this.selecNumber;
    /*  store.dispatch(createIncrementAction(value*1)) */
    this.props.jia(value*1)
  }
  decrement = () => {
    const {value} = this.selecNumber;
    //const {count} = this.state;
    // 通知redux加value
    /* store.dispatch(createDecrementAction(value*1)) */
    this.props.jian(value*1)
  }
  incrementIfOdd = () => {
    const {value} = this.selecNumber;
    /* const count = store.getState()
    if(count % 2 === 0) return
    store.dispatch(createIncrementAction(value*1)) */
    if(this.props.count % 2 !== 0){
      this.props.jia(value*1)
    }
  }
  incrementAsync = () => {
    const {value} = this.selecNumber;
    /* //setTimeout(()=>{createIncrementAsynAction
      store.dispatch(createIncrementAsynAction(value*1, 1000))
    //},1000) */
    this.props.jiaAsny(value*1, 1000)
  }
  render() {
    //console.log("UI组件", this.props);
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={c => this.selecNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}

// 使用connect()()创建并且暴露一个Count的容器组件
export default connect(
  state =>({ count : state}),
   {
     jia : createIncrementAction,
     jian : createDecrementAction,
     jiaAsny : createIncrementAsynAction,
   }
   )(Count)

  