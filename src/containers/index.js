import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import Sortable from '../components/Sortable';

import * as Actions from '../actions';
import { getRandomId } from '../lib';



import Categories from '../components/categories';
import Todos from '../components/todos';

import styled, { css } from 'styled-components'



//import Main from '../components/Main';


import Color from '../constants/Color'
import Size from '../constants/Size'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import MainContent from '../components/MainContent';

class App extends React.Component {

  //App.props
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

  // 
  // const find = [1, 2, 3, 4, 5].find((item) => {
  //  if (item - 3 === 1) {
  //   return true;
  //  }
  //  return false;
  //})
  // find = 4

  getCategoryName() {
    const { categories2, selectedCategory } = this.props;
    const category88 = categories2.find((category55) => {
      if (category55.id === selectedCategory) {
        return true;
      }
      return false;
    });

    if (!category88) {
      return null;
    }
    return category88.name;
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
    return (
     <Page>
     <Header />
     <MainWrapper>
       <SideWrapper>
         <Categories categoryName={categoryName} selectedCategory={selectedCategory} categories3={categories2} addCategory2={actions.addCategory} removeCategory={actions.removeCategory} setCategory77={actions.setCategory}/>
       </SideWrapper>
       <ContentWrapper>
         <p>選択中のカテゴリー 「{categoryName}」</p>
         <Todos todos={todos} addTodo2={actions.addTodo} removeTodo={actions.removeTodo} selectedCategory={selectedCategory} />
         <Sortable />
       </ContentWrapper>
     </MainWrapper>
     </Page>
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



const MainWrapper = styled.div`
  display: flex;
  width: 100%;
`

const SideWrapper = styled.div`
  width: ${Size.SideWrapper.width}px;
  position: fixed;
  padding-top: 59px;
  min-height: 100%;
  background-color: ${Color.Gray};
`

const ContentWrapper = styled.div`
  position: relative;
  left: ${Size.SideWrapper.width}px;
  width: calc(100% - ${Size.SideWrapper.width}px);
  overflow-y: auto;
  text-align: left;
  height: calc(100vh - ${Size.Header.height}px - 1px);
`

const Page = styled.div`
  ${props =>
    props.show_modal &&
    css`
      -webkit-filter: blur(4px);
      filter: blur(4px);
    `};
`

