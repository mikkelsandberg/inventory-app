import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

const NewItem = props =>
  <form onSubmit={props.newItemSubmitHandler}>
    <input
      type="number"
      id="quantity"
      value={props.newQuantity}
      onChange={props.handleNewTextInput} />
    <input
      type="text"
      id="name"
      value={props.newName}
      onChange={props.handleNewTextInput} />
    <Button type="submit" name="submit" value="submit" className="mb-4" bsStyle="primary">Submit</Button>
  </form>;

NewItem.propTypes = {
  newQuantity: PropTypes.string.isRequired,
  newName: PropTypes.string.isRequired,
  newItemSubmitHandler: PropTypes.func.isRequired,
  handleNewTextInput: PropTypes.func.isRequired
}

export default NewItem;