import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import Categories from '../components/categories';
import Todos from '../components/todos';
import * as Actions from '../actions';

class App extends React.Component {

  constructor(props) {
    super(props);
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

  getCategoryName() {
    const { categories, selectedCategory } = this.props;
    const category = categories.find((category) => {
      if (category.id === selectedCategory) {
        return true;
      }
      return false;
    });
    return category.name;
  }

  render() {
    const { categories, actions, selectedCategory } = this.props;
    const todos = this.getTodos();
    const categoryName = this.getCategoryName();

    return (<div>
      <Categories categories={categories} 
        addCategory={actions.addCategory} 
        removeCategory={actions.removeCategory}
        setCategory={actions.setCategory}
      />
      <p>選択中のカテゴリー 「{categoryName}」</p>
      <Todos todos={todos} 
        addTodo={actions.addTodo} 
        removeTodo={actions.removeTodo}
        selectedCategory={selectedCategory}
      />
    </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);