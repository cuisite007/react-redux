import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
    createIncrementAction,
    createDecrementAction
  } from '../../redux/actions/count'
class Count extends Component {
  increment = () => {
    const {value} = this.selectNumber
    this.props.jia(value*1)
  }
  decrement = () => {
    const { value } = this.selectNumber
    this.props.jian(value*1)
  }
  incrementIfOdd = () => {
    const {value} = this.selectNumber
    if(this.props.count % 2 !== 0) {
      this.props.jia(value*1)
    } 
  }
  incrementAysn = () => {
    const {value} = this.selectNumber
    setTimeout(()=>{
      this.props.jia(value*1)
    },1000)
  }
  render() {
    //console.log(this.props);
    return (
      <div>
        <h1>当前求和为: {this.props.count}, 下面组件的总人数为：{this.props.rens}</h1>
        <select ref = {c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数加</button>&nbsp;
        <button onClick={this.incrementAysn}>异步加</button>&nbsp;
      </div>
    )
  }
}

export default connect(
  state => ({count:state.he, rens:state.renshu.length}),
  {
    jia : createIncrementAction,
    jian : createDecrementAction,
  })(Count)