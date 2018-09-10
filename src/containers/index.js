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
    const { todos, selectedCategoryId } = this.props;
    return todos.filter((todo) => {
      if (todo.category === selectedCategoryId) {
        return true;
      }
      return false;
    });
  }

  render() {
    const { categories, actions } = this.props;
    const todos = this.getTodos();

    return (<div>
      <Categories categories={categories} />
      <Todos todos={todos} addTodo={actions.addTodo} />
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