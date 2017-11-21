import React, { Component } from 'react';
import {PageHeader} from 'react-bootstrap';
import NewItem from './NewItem';
import ItemList from './ItemList';

class App extends Component {
  state = {
    newItem: {
      quantity: '',
      name: ''
    },
    items: [
      {
        id: 0,
        quantity: '1',
        name: 'soda'
      },
      {
        id: 1,
        quantity: '2',
        name: 'milk'
      },
      {
        id: 2,
        quantity: '7',
        name: 'ranch dressing'
      },
      {
        id: 3,
        quantity: '3',
        name: 'orange juice'
      },
      {
        id: 4,
        quantity: '4',
        name: 'water'
      }
    ]
  };

  lastItemId = this.state.items.length;

  newItemId = () => {
    const id = this.lastItemId;
    this.lastItemId += 1;
    return id;
  };

  handleNewTextInput = e => {
    this.setState({
      ...this.state,
      newItem: {
        ...this.state.newItem,
        [e.target.id]: e.target.value
      }
    });
  };

  handleRemove = id => {
    this.setState({
      items: this.state.items.filter(item => id !== item.id)
    });
  };

  newItemSubmitHandler = e => {
    e.preventDefault();
    const id = this.newItemId();
    if (this.state.newItem.name) {
      this.setState({
        items: [
          {
            quantity: this.state.newItem.quantity,
            name: this.state.newItem.name,
            id
          },
          ...this.state.items
        ],
        newItem: {
          quantity: '',
          name: ''
        }
      });
    }
    return null;
  };

  render() {
    return (
      <div className="App">
        <PageHeader className="text-center">Inventory App</PageHeader>

        <div className="container-fluid">
          <NewItem
            newQuantity={this.state.newItem.quantity}
            newName={this.state.newItem.name}
            newItemSubmitHandler={this.newItemSubmitHandler}
            handleNewTextInput={this.handleNewTextInput} />
          <ItemList
            items={this.state.items}
            handleRemove={this.handleRemove} />
        </div>
      </div>
    );
  }
}

export default App;