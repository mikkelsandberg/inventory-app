import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'react-bootstrap';
import Item from './Item';

const ItemList = props =>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Qty</th>
        <th>Item</th>
        <th>Tags</th>
      </tr>
    </thead>
    <tbody>
      {props.items.map((item, index) =>
        <Item
          key={index}
          quantity={item.quantity}
          name={item.name}
          tags={item.tags} />
      )}
    </tbody>
  </Table>;

ItemList.propTypes = {
  items: PropTypes.array.isRequired
}

export default ItemList;