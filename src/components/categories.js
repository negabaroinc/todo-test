import React, { Component } from 'react';



export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: ''
    }
  }

  onInput4(e){
    this.setState({
     name: e.target.value
    });
    
  }
  removeCategory3(category){
    this.props.removeCategory2(category)
  }
  
  //このeどこで使ってる？なくてもうごくよね
  addCategory3(){
    this.props.addCategory2({
       //------>>>>>id: 成功したけど、このやり方であってるかな
       id: this.props.key_hoge,
       name: this.state.name,
    });
  }
  render() {
    console.log('11111111111111:');
    console.log(this.props);
    //categories2はcontainerで渡したkeyのこと
    const { categories3 } = this.props;
    return (<ul><h1>Category</h1>
      {/* test */}
      {categories3.map((category) => {
        //ここはなんだっけ
        return (<li>{category.name} <button onClick={() => this.removeCategory3(category)}> del</button></li>);
      })}
    <li>
      <input type="text" onInput={this.onInput4.bind(this)} />
      {/*<button onClick={(event) => this.addCategory3(event)}>Add</button>*/}
      <button onClick={() => this.addCategory3()}>Add</button>
    </li>
    </ul>)

  }
}