import * as types from '../constants/ActionTypes';

export const addTodo = (todo) => ({ type: types.ADDTODO, todo });

export const removeTodo = (todo) => ({ type: types.REMOVETODO, todo });

export const updateTodo = (todo) => ({ type: types.UPDATETODO, todo });

export const addCategory = (category) => ({ type: types.ADDCATEGORY, category });

export const updateCategory = (category) => ({ type: types.UPDATECATEGORY, category });

export const removeCategory = (category) => ({ type: types.REMOVECATEGORY, category });

export const setCategory = (categoryId) => ({ type: types.SETCATEGORY, categoryId });