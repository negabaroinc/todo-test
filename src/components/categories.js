import React, { Component } from 'react';
import { getRandomId } from '../lib';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: ''
    }
  }

  onInput(e){
    this.setState({
     name: e.target.value
    });
  }

   removeCategory(category){
     this.props.removeCategory(category)
   }
   
  //このeどこで使ってる？なくてもうごくよね
  addCategory3(){
    this.props.addCategory2({
       //------>>>>>id: 成功したけど、このやり方であってるかな
       id: getRandomId(),
       name: this.state.name,
    });
  }
  
  setCategory(categoryId) {
    this.props.setCategory77(categoryId);
  }
  setCategory_ver2(e) {
    console.log(this);
    this.props.setCategory77(e.target.value);
  }
  
  render() {
    const { categories3, selectedCategory } = this.props;
    console.log('11111111111111:');
    console.log(this.props);
    //categories2はcontainerで渡したkeyのこと
    return (<ul><h1>Category</h1>
      <select name="example1" onChange={(e) => {
        this.setCategory_ver2(e);
      }} value={selectedCategory}>
      {console.log('categories3!!!:'+ categories3)}
      {categories3.map((category) => {
        //koko3 (categoryNameがあればselectedを変える)
        return (<option key={category.id} value={category.id}>{category.name}</option>);
      })}
      </select>
      
      {/* test */}
      {categories3.map((category) => {
        return (<li key={category.id}>
        {category.name}
        <button onClick={this.setCategory.bind(this, category.id)}>選択</button>
        <button onClick={() => this.removeCategory(category)}> del</button>
        </li>);
      })}
    <li>
      <input type="text" onInput={this.onInput.bind(this)} />
      {/*<button onClick={(event) => this.addCategory3(event)}>Add</button>*/}
      <button onClick={() => this.addCategory3()}>Add</button>
    </li>
    </ul>)

  }
}