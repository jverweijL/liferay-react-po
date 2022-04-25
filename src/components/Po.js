import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Po = ({
  id,
  ponumber,
  podate,
  deliverydate,
  deliverydestination,
  appointmenttime,
  handleRemoveBook
}) => {
  const history = useHistory();

  return (
    <tr>
      <td>{ponumber}</td>
      <td>{podate.toLocaleDateString()}</td>
      <td>{deliverydate}</td>
      <td>{deliverydestination}</td>
      <td>{appointmenttime}</td>
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