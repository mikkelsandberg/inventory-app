import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'react-bootstrap';
import Item from './Item';

const ItemList = props =>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Remove</th>
        <th>Qty</th>
        <th>Item</th>
      </tr>
    </thead>
    <tbody>
      {props.items.map((item, id) =>
        <Item
          key={id}
          handleRemove={() => props.handleRemove(item.id)}
          quantity={item.quantity}
          name={item.name}/>
      )}
    </tbody>
  </Table>;

ItemList.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}

export default ItemList;