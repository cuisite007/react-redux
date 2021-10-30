import React, { Component } from 'react'
import {creatIncrementAction,createDecrementAction} from '../../redux/actions/count'
import {connect} from 'react-redux'

class Count extends Component {
  increment = () => {
    const {value} = this.selectNumber
    this.props.jia(value*1)
  }
  decrement = () => {
    const {value} = this.selectNumber
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
    const {count, person} = this.props;
    return (
      <div>
        <h1>我是Count组件，下方总人数为：{person.length}</h1>
        <h3>当前求和为：{count}</h3>
        <select ref = {c => this.selectNumber = c}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
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
  state => ({count:state.count, person:state.person}),
  {
    jia : creatIncrementAction,
    jian : createDecrementAction
  }
)(Count)
