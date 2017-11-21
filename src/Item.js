import React from 'react';
import PropTypes from 'prop-types';

const Item = props =>
  <tr>
    <td
      className="removeItem"
      onClick={props.handleRemove} >
        <span className="oi oi-x" title="X icon" aria-hidden="true"></span>
    </td>
    <td className="itemQuantity">{props.quantity}</td>
    <td className="itemName">{props.name}</td>
  </tr>;

Item.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  quantity: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Item;