import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Po = ({
  id,
  bookname,
  author,
  price,
  quantity,
  date,
  handleRemoveBook
}) => {
  const history = useHistory();

  return (
    <tr>
      <td>{bookname}</td>
      <td>{author}</td>
      <td>{price}</td>
      <td>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
        Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button></td>
    </tr>
  );
};

export default Po;