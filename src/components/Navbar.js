import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <h1>*LAB - WikiCountries*</h1>
      <Link to="/">Home</Link>
      <Link to="/countries">Countries</Link>
    </div>
  );
}

export default Navbar;
