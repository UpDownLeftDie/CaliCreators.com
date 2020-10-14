import React, { Fragment } from 'react';
import { string } from 'prop-types';

const Header = ({ title }) => (
  <Fragment>
    <h1>{title}</h1>
  </Fragment>
);

Header.propsTypes = {
  title: string.isRequired,
};

export default Header;
