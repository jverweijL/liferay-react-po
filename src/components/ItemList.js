import React from 'react';
import _ from 'lodash';
import Item from './Item';

const ItemList = ({ items, setItems }) => {

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <React.Fragment>
      <div className="item-list">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Item #</th>
              <th scope="col"></th>
            </tr>
          </thead>
        {!_.isEmpty(items) ? (
          items.map((item) => (
            
            <Item key={item.id} {...item} handleRemoveItem={handleRemoveItem} />
          ))
        ) : (
          <p className="message">No items available.</p>
        )}
        </table>
      </div>
    </React.Fragment>
  );
};

export default ItemList;