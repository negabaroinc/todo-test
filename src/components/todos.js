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


   addTodo3() {
     const { addTodo2, selectedCategory, key_hoge } = this.props;
     addTodo2({
       name: this.state.name,
       id: key_hoge,
       category: selectedCategory
     });
   }
  //koko
  //addTodo3() {
  //  this.props.addTodo2({
  //    name: this.state.name,
      //------>>>>>0に固定したけど、categoryを選ぶには？？
      
      //id: this.props.category_id[0].id,
      //id: this.props.key_hoge
      //id: getRandomId()
  //  });

  //}
  //koko2
  removeTodo(todo) { // { name: 'hoge', id: 'uniqueなid' }
    this.props.removeTodo(todo);
  }
  
  render() {

    console.log('22222:');
    console.log(this.props);
    //const { todos,category_id } = this.props;
    const { todos, removeTodo } = this.props;
    return (
      <div>
      <ul>
      <h1>Todo</h1>
      
      {todos.map((todo) => {
        //koko3
        return (<li key={todo.id}>{todo.name}<button onClick={this.removeTodo.bind(this, todo)}>削除</button></li>);
      })}
      <li>
        <input type="text" onInput={this.onInput.bind(this)} />
        <button onClick={this.addTodo3.bind(this)}>追加</button>
      </li>
    </ul></div>)
  }
}