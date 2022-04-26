import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Item = ({
  id,
  itemnumber,
  handleRemoveItem
}) => {
  const history = useHistory();

  return (
    <tr>
      <td>{itemnumber}</td>
      <td>
        <Button variant="primary" onClick={() => history.push(`/edit/item/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveItem(id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Item;