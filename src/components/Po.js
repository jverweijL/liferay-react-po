import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Po = ({
  id,
  purchaseOrderNumber,
  orderDate,
  requestedDeliveryDate,
  deliveryTime,
  shippingAddressId,
  handleRemoveBook
}) => {
  const history = useHistory();

  return (
    <tr>
      <td>{purchaseOrderNumber}</td>
      <td>{orderDate}</td>
      <td>{requestedDeliveryDate}</td>
      <td>{deliveryTime}</td>
      <td>{shippingAddressId}</td>
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