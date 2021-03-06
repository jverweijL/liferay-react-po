import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Purchase Order Management</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Purchase Orders
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Purchase Order
        </NavLink>
      </div>
    </header>
  );
};

export default Header;