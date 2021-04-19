import React from 'react';
import classes from './Navbar.module.css';
import PropTypes from 'prop-types';

const Navbar = ({ className, children, overwriteExistingClass }) => {
  const navClass = className
    ? overwriteExistingClass
      ? className
      : `${classes.Navbar} ${className}`
    : classes.Navbar;

  return <div className={navClass}>{children}</div>;
};

Navbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
  overwriteExistingClass: PropTypes.bool,
};

export default Navbar;
