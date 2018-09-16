import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import Categories from '../components/categories';
import Todos from '../components/todos';
import * as Actions from '../actions';

class App extends React.Component {

  //App.props
  constructor(props) {
    super(props); //React.Component::constructor(props); お約束
  }

  getTodos() {
    const { todos, selectedCategoryId } = this.props;
    return todos.filter((todo) => {
      if (todo.category === selectedCategoryId) {
        return true;
      }
      return false;
    });
  }

  render() {
    //props === { todos: [{name: ''}], categories: []}
    //1. componentでaddTodo実行される
    //2. actionのaddTodoが実行される
    //3. actions/index.js 7行目. /{ name: '' } -> { type: types.ADDTODO, todo: { name: ''}} が実行される
    //4. reducerにいく
    //5. 3ばんで渡された値がreducerに渡される
    //6. reducer で ゴニョゴニョしてstateの値が変更される
    //7. ゴニョ先ほどのstateがApp.props（Container）に代入される
    const { categories, actions } = this.props;
    const todos = this.getTodos();

    return (<div>
      <Categories categories={categories} />
      <Todos todos={todos} addTodo={actions.addTodo} removeTodo={actions.removeTodo} />
    </div>
    );
  }
}

function mapStateToProps(state) {
  return state;　//App::props === state
  //componentのprops とreduxのステートが同期される
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);