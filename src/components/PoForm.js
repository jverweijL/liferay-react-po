import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const PoForm = (props) => {
  const [book, setBook] = useState({
    ponumber: props.book ? props.book.ponumber : '',
    podate: props.book ? props.book.podate : '',
    deliverydate: props.book ? props.book.deliverydate : '',
    deliverydestination: props.book ? props.book.deliverydestination : '',
    appointmenttime: props.book ? props.book.appointmenttime : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { ponumber, deliverydate, deliverydestination, appointmenttime } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [ponumber, deliverydate, deliverydestination, appointmenttime];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        ponumber,
        podate : new Date(),
        deliverydate,
        deliverydestination,
        appointmenttime
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'ponumber':
        if (value === '' || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setBook((prevState) => ({
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
          <Form.Label>Purchase Order #</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="ponumber"
            value={ponumber}
            placeholder="Enter purchase order ID"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Delivery Date</Form.Label>
          <Form.Control
            className="input-control"
            type="date"
            name="deliverydate"
            value={deliverydate}
            placeholder="Enter delivery date"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="deliverydestination">
          <Form.Label>Destination</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="deliverydestination"
            value={deliverydestination}
            placeholder="Enter destination"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Appointment Time</Form.Label>
          <Form.Control
            className="input-control"
            type="time"
            name="appointmenttime"
            value={appointmenttime}
            placeholder="Enter appointment time"
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

export default PoForm;