import React, { Component } from 'react'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsynAction,
} from '../../redux/count_action'
import {connect} from 'react-redux'

class Count extends Component {
  increment = () => {
    this.props.jia(1)
  }
  decrement = () => {
    this.props.jian(1)
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <button onClick={this.increment}>点我加1</button>&nbsp;
        <button onClick={this.decrement}>点我减1</button>
      </div>
    )
  }
}

export default connect(
  state => ({count: state}),
  {
   jia : createIncrementAction,
   jian : createDecrementAction,
   jiaAnsy : createIncrementAsynAction,
  }
)(Count)