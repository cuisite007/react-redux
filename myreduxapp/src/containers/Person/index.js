import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPersonAction } from '../../redux/actions/person'
class Person extends Component {
  addPerson = () => {
    const name = this.newName.value;
    const age = this.newAge.value;
    /* if(name.trim() === '' && age.trim() === ''){
      alert('名字和年龄输入不能为空')
    } else if(name.trim() === '') {
      alert('名字输入不能为空')
    } else if(age.trim() === '') {
      alert('年龄输入不能为空')
    }  */
    let data;
    name.trim() === '' && age.trim() === '' ? alert('名字和年龄输入不能为空') :
      name.trim() === '' ? alert('名字输入不能为空') :
        age.trim() === '' ? alert('年龄输入不能为空') :
          data = { id: Math.random(), name, age, }
    if(data){
      this.props.addperson(data)
    } 
    this.newName.value = '';
    this.newAge.value = '';
  }
  render() {
    console.log(this.props);
    const {count, person} = this.props;
    return (
      <div>
        <h1>我是Person组件，上方组件总和为：{count}</h1>
        <input ref={c => this.newName = c} type='test' placeholder='输入名字' />&nbsp;
        <input ref={c => this.newAge = c} type='test' placeholder='输入年龄' />&nbsp;
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            person.map((o) => {
              return <li key={o.id}>{o.name}----{o.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({ person: state.person , count : state.count }),
  {
    addperson: createPersonAction
  })(Person)