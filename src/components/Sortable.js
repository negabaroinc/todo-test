import React, { Component } from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

import {render} from 'react-dom';


const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

const SortableItem = SortableElement(({value}) =>
  <li>{value}</li>
);

class Sortable extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  
//  onSortEnd = ({OldIndex, newIndex}) => {
//    this.setState({
//      items: arrayMove(this.props.items2, OldIndex, newIndex),
//    });
//  };
  render(){
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}