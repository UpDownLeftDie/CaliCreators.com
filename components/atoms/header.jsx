import React, { Fragment } from 'react';
import { string } from 'prop-types';

const Header = ({ title }) => (
  <Fragment>
    <h1>{title}</h1>
    <style jsx>{`
      h1 {
        font-size: 38px;
        font-size: max(2.5em, 3vw);
        padding: 0;
        margin: 0;
        line-height: 1;
      }
    `}</style>
  </Fragment>
);

Header.propsTypes = {
  title: string.isRequired,
};

export default Header;
