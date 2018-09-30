import * as types from '../constants/ActionTypes';

const intialId = '_' + Math.random().toString(36).substr(2, 9)

const initialState = {
  todos: [],
  categories: [{
    name: '名称未設定',
    id: intialId
  }],
  selectedCategory: intialId
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SETCATEGORY:
      return Object.assign({}, state, {
        selectedCategory: action.categoryId
      });
    case types.ADDTODO:
      return Object.assign({}, state, { todos: [...state.todos, action.todo] });
    case types.ADDTODOS:
      return Object.assign({}, state, { todos: [...state.todos, ...action.todo] });
    case types.UPDATETODO:
      const index = state.todos.findIndex((todo) => todo.id === action.todo.id);
      if (index >= 0) {
        return Object.assign({}, state, {
          todos: [...state.todos.slice(0, index), action.todo, ...state.todos.slice(index + 1)],
          todo: action.todo
        })
      } else {
        return Object.assign({}, state, {
          todos: [...state.todos, action.todo],
          todo: action.todo
        });
      }
    case types.REMOVETODO:
      console.log(action.todo, action.todo.id);
      const removeIndex = state.todos.findIndex((todo) => todo.id === action.todo.id);
      return Object.assign({}, state, {
        todos: [...state.todos.slice(0, removeIndex), ...state.todos.slice(removeIndex + 1)]
      });
    case types.ADDCATEGORY:
      return Object.assign({}, state, { categories: [...state.categories, action.category] })
    case types.ADDCATEGORIES:
      return Object.assign({}, state, { categories: [...state.categories, ...action.categories] })
    case types.UPDATECATEGORY:
      const categoryIndex = state.categories.findIndex((category) => category.id === action.category.id);
      if (categoryIndex >= 0) {
        return Object.assign({}, state, {
          categories: [...state.categories.slice(0, categoryIndex), action.category, ...state.categories.slice(categoryIndex + 1)],
        })
      } else {
        return state;
      }
    case types.REMOVECATEGORY:
      const removeCategoryIndex = state.categories.findIndex((category) => category.id === action.category.id);
      return Object.assign({}, state, {
        categories: [...state.categories.slice(0, removeCategoryIndex), ...state.categories.slice(removeCategoryIndex + 1)]
      });
    default:
      return state;
  }
}
