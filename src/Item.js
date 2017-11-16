import React from 'react';

const Item = props =>
  <tr>
    <td>{props.quantity}</td>
    <td>{props.name}</td>
    <td>
      {
        props.tags.map((item, index, array) =>
          (index === array.length - 1) ? item : (item + ', ')
        )
      }
    </td>
  </tr>;

export default Item;