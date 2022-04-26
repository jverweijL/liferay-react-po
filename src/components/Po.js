import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Po = ({
  id,
  pONumber,
  dateCreated,
  deliveryDate,
  deliveryTime,
  deliveryDestination,
  handleRemoveBook
}) => {
  const history = useHistory();

  return (
    <tr>
      <td>{pONumber}</td>
      <td>{dateCreated}</td>
      <td>{deliveryDate}</td>
      <td>{deliveryTime}</td>
      <td>{deliveryDestination.name}</td>
      <td>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Po;