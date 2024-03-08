import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
import { any } from 'prop-types'



/* export default class App extends Component {
    //初始化状态
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '学习', done: false }
        ]
    }

    //addTodo用于添加一个todo，接收的参数是todo对象
    addTodo = (todoObj) => {
        const { todos } = this.state
        const newtodo = [todoObj, ...todos]
        this.setState({ todos: newtodo })
    }

    //用于更新一个todo对象
    updateTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, done }
            else return todoObj
        })
        this.setState({ todos: newTodos })
    }

    //删除一个todo
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        this.setState({ todos: newTodos })
    }

    checkAllTodo = (done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done }
        })
        this.setState({ todos: newTodos })
    }
    //清除已完成todo
    clearAllDone = () => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done
        })
        this.setState({ todos: newTodos })
    }

    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
                </div>
            </div>
        )
    }
} */


//独立完成

export default class App extends Component {
    state = {
        todos: [
            { id: '1', name: '吃饭', done: true },
            { id: '2', name: '睡觉', done: true },
            { id: '3', name: '敲代码', done: false }
        ]
    }

    addTodo = (todoObj) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }

    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        this.setState({ todos: newTodos })
    }

    updateTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, done }
            else return todoObj
        })
        this.setState({ todos: newTodos })
    }

    clearAllDone = () => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done
        })
        this.setState({ todos: newTodos })
    }

    checkAllTodo = (done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done }
        })
        this.setState({ todos: newTodos })
    }

    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} />
                    <Footer todos={todos} clearAllDone={this.clearAllDone} checkAllTodo={this.checkAllTodo}/>
                </div>
            </div>
        )
    }
}
