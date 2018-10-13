import React, { Component } from 'react';
import styled from 'styled-components'
import Size from '../constants/Size'
import todos from './todos'


export default class MainContent extends Component {
  constructor(props) {
    super(props); //React.Component::constructor(props); お約束
  }
  getTodos() {
    const { todos, selectedCategory } = this.props;
    return todos.filter((todo) => {
      if (todo.category === selectedCategory) {
        return true;
      }
      return false;
    });
  }
  
  render (){
    const { categories2, actions, selectedCategory } = this.props;
    const todos = this.getTodos();
    
    return (
    <Content>
       <Todos todos={todos} addTodo2={actions.addTodo} removeTodo={actions.removeTodo} selectedCategory={selectedCategory} />
    </Content>
    );
  }
  
  
  
  
  

}


const Content = styled.div`
  height: ${Size.Header.height}px;
  box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid blue;
`