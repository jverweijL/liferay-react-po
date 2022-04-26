import React from 'react';
import ItemForm from './ItemForm';
import { useParams } from 'react-router-dom';

const EditItem = ({ history, items, setItems }) => {
  const { id } = useParams();
  const itemToEdit = items.find((item) => item.id === id);

  const handleOnSubmit = (item) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems([item, ...filteredItems]);
    history.push('/');
  };

  return (
    <div>
      <ItemForm item={itemToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditItem;