import * as types from '../constants/ActionTypes';

export const addTodo = (todo) => ({ type: types.ADDTODO, todo }); //
                                                        //todo 
                                                        //todo: todo
                                                        //同じ
                       //{ name: '' } -> { type: types.ADDTODO, todo: { name: ''}}
export const removeTodo = (todo) => ({ type: types.REMOVETODO, todo });
    // { name: 'hoge', id: 'uniqueなid' } => { type: types.REMOVETODO, todo: { name: 'hoge', id: 'uniqueなid' }}
export const updateTodo = (todo) => ({ type: types.UPDATETODO, todo });

export const addCategory = (category) => ({ type: types.ADDCATEGORY, category });

export const updateCategory = (category) => ({ type: types.UPDATECATEGORY, category });

export const removeCategory = (category) => ({ type: types.REMOVECATEGORY, category });

export const setCategory = (categoryId) => ({ type: types.SETCATEGORY, categoryId });