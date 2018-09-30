import React, { Component } from 'react';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: ''
    }
  }

  onInput(e) {
    this.setState({
      categoryName: e.target.value
    });
  }

  addCategory() {
    const { addCategory } = this.props;
    const { categoryName } = this.state;
    addCategory({
      name: categoryName,
      id: '_' + Math.random().toString(36).substr(2, 9)
    });
  }

  removeCategory(category) {
    this.props.removeCategory(category);
  }

  setCategory(categoryId) {
    this.props.setCategory(categoryId);
  }

  render() {
    const { categories } = this.props;
    return (<div><ul>
      <h3>カテゴリー</h3>
        {categories.map((category) => {
          return (<li key={category.id}>
            {category.name}
            <button onClick={this.setCategory.bind(this, category.id)}>選択</button>
            <button onClick={this.removeCategory.bind(this, category)}>削除</button>
            </li>);
        })}
        <li>
          <input type="text" onInput={this.onInput.bind(this)}/>
          <button onClick={this.addCategory.bind(this)}>追加</button>
        </li>
      </ul>
    </div>)
  }
}