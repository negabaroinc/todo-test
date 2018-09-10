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
    this.props.addTodo(this.state);
  }

  render() {
    const { todos } = this.props;
    return (<ul>
      {todos.map((todo) => {
        return (<li>{todo.name}</li>);
      })}
      <li>
        <input type="text" onInput={this.onInput.bind(this)}/>
        <button onClick={this.addTodo.bind(this)}>追加</button>
      </li>
    </ul>)
  }
}