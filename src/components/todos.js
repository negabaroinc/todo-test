import React, { Component } from 'react';

const getRandomId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
}

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  onInput(e) {
    this.setState({
      name: e.target.value
    });
  }

  //koko
  addTodo() {
    this.props.addTodo({
      name: this.state.name,
      id: getRandomId()
    });
  }
  //koko2
  removeTodo(todo) { // { name: 'hoge', id: 'uniqueなid' }
    this.props.removeTodo(todo);
  }
  
  render() {
    const { todos } = this.props;
    return (<ul>
      {todos.map((todo) => {
        //koko3
        return (<li>{todo.name}<button onClick={this.removeTodo.bind(this, todo)}>削除</button></li>);
      })}
      <li>
        <input type="text" onInput={this.onInput.bind(this)}/>
        <button onClick={this.addTodo.bind(this)}>追加</button>
      </li>
    </ul>)
  }
}