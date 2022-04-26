import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ItemForm = (props) => {
  const [item, setItem] = useState({
    itemnumber: props.item ? props.item.itemnumber : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { itemnumber } = item;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [itemnumber];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const item = {
        id: uuidv4(),
        itemnumber
      };
      props.handleOnSubmit(item);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'itemnumber':
        if (value === '' || parseInt(value) === +value) {
          setItem((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setItem((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Item #</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="itemnumber"
            value={itemnumber}
            placeholder="Enter item ID"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ItemForm;