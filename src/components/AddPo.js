import React from 'react';
import PoForm from './PoForm';

const AddPo = ({ history, books, setBooks }) => {
  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <PoForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddPo;