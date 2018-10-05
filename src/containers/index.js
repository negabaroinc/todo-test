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
    const { todos, selectedCategory } = this.props;
    return todos.filter((todo) => {
      //if (todo.category === selectedCategory) {
      //  return true;
      //}
      //return false;
    });
  }

  getCategoryName() {
    const { categories2, selectedCategory } = this.props;
    const category88 = categories2.find((category55) => {
      if (category55.id === selectedCategory) {
        return true;
      }
      return false;
    });
    return category55.name;
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
    
    console.log('33333333333333');
    console.log(this.props);
    //ここではreduxにあるデータ参照できる(this.props)
    const { categories2, actions, selectedCategory } = this.props;
    const todos = this.getTodos();
    const categoryName = this.getCategoryName();
    const getRandomId = () => {
      return '_' + Math.random().toString(36).substr(2, 9);
    }
    return (<div>
      {/* ------>>>>>keyと書くと値が取れず。。とりあえずkey_hogeにした */}
      <Categories key_hoge={getRandomId()} categories3={categories2} addCategory2={actions.addCategory} removeCategory2={actions.removeCategory} setCategory={actions.setCategory}/>
      <p>選択中のカテゴリー 「{categoryName}」</p>
      <Todos category_id={categories2} todos={todos} addTodo2={actions.addTodo} removeTodo2={actions.removeTodo} selectedCategory={selectedCategory} />
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