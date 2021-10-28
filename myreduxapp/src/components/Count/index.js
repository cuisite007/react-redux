import React, { Component } from 'react'
import store from "../../redux/store"

export default class Count extends Component {
  state = { car : "rx5" }
  increment = () => {
    const {value} = this.selecNumber;
     store.dispatch({type:"increment", data:value*1})
  }
  decrement = () => {
    const {value} = this.selecNumber;
    //const {count} = this.state;
    // 通知redux加value
    store.dispatch({type:"decrement", data:value*1})
  }
  incrementIfOdd = () => {
    const {value} = this.selecNumber;
    const count = store.getState()
    if(count % 2 === 0) return
    store.dispatch({type:"increment", data:value*1})
  }
  incrementAsync = () => {
    const {value} = this.selecNumber;
    setTimeout(()=>{
      store.dispatch({type:"increment", data:value*1})
    },1000)
  }
  render() {
    //console.log(store);
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
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