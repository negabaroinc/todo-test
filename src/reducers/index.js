import * as types from '../constants/ActionTypes';

const initialState = {
  todos: [],
  categories: []
};

export default (state = initialState, action) => {
  // action = { type: types.ADDTODO, todo: { name: ''}}
  //action.type === types.ADDTODO
  //action.todo === { name: ''}
  switch (action.type) {
    case types.ADDTODO:
      // {}, { todos: [], categories:[]}, { todos: [空, {name: ''}]}}
      // {}, { todos: [], categories:[]}, {todos: [{name: ''}]}
      // state = { todos: [{name: ''}], categories: []}
      // Object.assign
      // Object.assign({ a: 'name', b: 'hogehoge'}, { b: 'test', c: 'lol'})
      // {a: 'name', b: 'test', c: 'lol'}
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
      //action = { type: types.REMOVETODO, todo: { name: 'hoge', id: 'uniqueなid' }}
      // findIndexの説明
      // ['daigo', 'hoge', 'fuga'].findIndex((name) => name === 'hoge') => 1
      const removeIndex = state.todos.findIndex((todo) => todo.id === action.todo.id);
      
      // sliceの説明
      // 消したい配列の番号を取得している
      // slice ['daigo', 'hoge', 'fuga'].slice(0, 1) => ['daigo'] //0banから 
      // ['daigo', 'hoge', 'fuga'].slice(2) => ['fuga']
      // sliceの引数が一つだけなら、'2'以降全部取り出す
      // [...['daigo'], ...['fuga']] => ['daigo', 'fuga']
      
      // todos = [a, b, c, d, e] -> [a, b, c, e]
      // [...todos(0, 3), ...todos(4)] 
      // [...[a, b, c], .[e]]
      // -> [a, b, c, e]
      
      //todos: state.todos.filter((todo) => {
      //  if (todo.id !== action.id) {
      //    return true;
      //  } else { 
      //    return false;
      //  }
      //}

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
