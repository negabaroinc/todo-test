import React, { Component } from 'react';

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

  addTodo() {
    this.props.addTodo({
      name: this.state.name,
      id: '_' + Math.random().toString(36).substr(2, 9)
    });
  }

  removeTodo(todo) {
    this.props.removeTodo(todo);
  }

  render() {
    const { todos, removeTodo } = this.props;
    return (<ul>
      {todos.map((todo) => {
        return (<li>{todo.name}
          <button onClick={this.removeTodo.bind(this, todo)}>削除</button>
        </li>);
      })}
      <li>
        <input type="text" onInput={this.onInput.bind(this)}/>
        <button onClick={this.addTodo.bind(this)}>追加</button>
      </li>
    </ul>)
  }
}