import React, { Fragment } from "react";

const LoadingIcon = () => (
  <Fragment>
    <i className="fad fa-spinner-third fa-spin"></i>
    <style jsx>{`
      .fad {
        display: block;
      }
      .fad.fa-spinner-third:after {
        position: relative;
        top: 4.4px;
      }
      .fad:before {
        top: 4.4px;
      }
    `}</style>
  </Fragment>
);

export default LoadingIcon;
