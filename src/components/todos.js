import React, { Component } from 'react';
import { getRandomId } from '../lib';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((item, index) => {
        return (<SortableItem key={`item-${index}`} index={index} name={item.name} />)
      })}
    </ul>
  );
});

const SortableItem = SortableElement((item) => {
  return(<li>{item.name}</li>);
});


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
    const { addTodo2, selectedCategory } = this.props;
    addTodo2({
      name: this.state.name,
      id: getRandomId(),
      category: selectedCategory
    });
  }

  onSortEnd({oldIndex, newIndex}) {
    const { todos } = this.props;
    console.log(todos, arrayMove(todos, oldIndex, newIndex));
    this.props.setTodo(arrayMove(todos, oldIndex, newIndex));
  }

  //koko2
  removeTodo(todo) { // { name: 'hoge', id: 'uniqueなid' }
    this.props.removeTodo(todo);
  }
  
  render() {
    //const { todos,category_id } = this.props;
    const { todos, removeTodo } = this.props;
    return (
      <div>
      <ul>
      <h1>Todo</h1>
        <SortableList items={todos} onSortEnd={this.onSortEnd.bind(this)} />
      <li>
        <input type="text" onInput={this.onInput.bind(this)} />
        <button onClick={this.addTodo3.bind(this)}>追加</button>
      </li>
    </ul></div>)
  }
}