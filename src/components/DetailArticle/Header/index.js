//*Import : npm
import React from 'react';
import PropTypes from 'prop-types';

//* Style
import './style.css';

//*Composant
const Header = ({
  title
}) => (
    <div>{title}</div>
);  

export default Header;
