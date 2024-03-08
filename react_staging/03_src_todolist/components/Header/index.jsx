import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

/* export default class Header extends Component {

  //对接收的props进行：类型、必要性的限制
  static propTypes={
    addTodo:PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    //解构赋值获取keyCode,target
    const { keyCode, target } = event
    //判断是否是回车按键
    if (keyCode !== 13) return
    if(target.value.trim()===''){ //trim去除字符串的头尾空格
      alert('输入不能为空')
      return
    }
    //准备好一个todo对象
    const todoObj = { id: nanoid(), name: target.value, done: false }
    //将todoObj传递给App
    this.props.addTodo(todoObj)
    target.value=''
  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
} */

export default class Header extends Component {

  handleKeyUp = (event) => {
    const { keyCode, target } = event
    //判断是否是回车按键
    if (keyCode !== 13) return
    if (target.value.trim() === '') { //trim去除字符串的头尾空格
      alert('输入不能为空')
      return
    }
    const todoObj = { id: nanoid(), name: target.value, done: false }
    this.props.addTodo(todoObj)
    // 清空输入
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder='请输入您的任务名称，按回车添加' />
      </div>
    )
  }
}