import React, { Component } from 'react'
import { createPersonAction } from '../../redux/actions/person'
import { connect } from 'react-redux'

class Person extends Component {
  addperson = () => {
    const name = this.personNameNode.value
    const age = this.personAgeNode.value
    //console.log(name, age, this.personNameNode.value);
    const data = {id:Math.random(), name, age}
    this.props.add(data)
  }
  render() {
    return (
      <div>
        <h1>我是Person组件, 上面Count组件的求和为：{this.props.qiuehe}</h1>
        <input ref={c => this.personNameNode = c} type="text" placeholder='输入名字' />&nbsp;
        <input ref={c => this.personAgeNode = c} type="text" placeholder='输入年龄' />&nbsp;
        <button onClick={this.addperson}>添加人员</button>
        <ul>
          {
            this.props.renshu.map((personObj) => {
              return <li key={personObj.id}>
                {personObj.name}----{personObj.age}
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({ renshu: state.renshu, qiuehe:state.he }), 
  {
    add: createPersonAction
  })(Person)
