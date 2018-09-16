import React, { Component } from 'react';

export default class Categories extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { categories } = this.props;
    return (<ul>
      {categories.map((category) => {
        //ここはなんだっけ
        return (<li>{category.name}ddd</li>);
      })}
    </ul>)
  }
}