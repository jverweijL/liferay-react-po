import React from 'react';
import ItemForm from './ItemForm';

const AddItem = ({ history, items, setItems }) => {
  const handleOnSubmit = (item) => {
    setItems([item, ...items]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <ItemForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddItem;