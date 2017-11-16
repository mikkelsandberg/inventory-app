import React, { Component } from 'react';
import {PageHeader,
        Button} from 'react-bootstrap';
import ItemList from './ItemList';

class App extends Component {
  state = {
    items: [
      {
        quantity: 1,
        name: 'Ketchup',
        tags: ['condiments']
      },
      {
        quantity: 3,
        name: 'Milk',
        tags: ['beverage', 'dairy']
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <PageHeader className="text-center">Inventory App</PageHeader>

        <div className="container-fluid">
          <Button className="mb-4" bsStyle="primary">Add Item</Button>
          <ItemList
            items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;