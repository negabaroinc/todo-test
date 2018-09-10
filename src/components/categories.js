import React, { Component } from 'react';

export default class Categories extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { categories } = this.props;
    return (<ul>
      {categories.map((category) => {
        return (<li>{category.name}</li>);
      })}
    </ul>)
  }
}