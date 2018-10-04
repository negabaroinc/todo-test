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

  onInput3(e) {
    this.setState({
      name: e.target.value
    });
  }

  //koko
  addTodo3() {
    this.props.addTodo2({
      name: this.state.name,
      //------>>>>>0に固定したけど、categoryを選ぶには？？
      
      id: this.props.category_id[0].id,
      //id: this.props.key_hoge
      //id: getRandomId()
    });
  }
  //koko2
  removeTodo3(todo) { // { name: 'hoge', id: 'uniqueなid' }
    this.props.removeTodo2(todo);
  }
  
  render() {
    console.log('22222:');
    console.log(this.props);
    const { todos,category_id } = this.props;
    return (
      <div>
      <select name="example1">
      {todos.map((todo) => {
        //koko3
        return (<option key={todo.id}>{todo.name}<button onClick={this.removeTodo3.bind(this, todo)}>削除</button></option>);
      })}
      </select>
      
      <ul>
      <h1>Todo</h1>
      {todos.map((todo) => {
        //koko3
        return (<li key={todo.id}>{todo.name}<button onClick={this.removeTodo3.bind(this, todo)}>削除</button></li>);
      })}
      <li>
        <input type="text" onInput={this.onInput3.bind(this)} />
        <button onClick={this.addTodo3.bind(this)}>追加</button>
      </li>
    </ul></div>)
  }
}