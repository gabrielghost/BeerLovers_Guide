import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <Link to={{pathname: `/`}} style={{ textDecoration: 'none' }}>
  <div className='beerTableHeader'>
  <h3>The Beerlover's Guide To The Galaxy</h3>
  </div>
  </Link>
);

export default Header;
