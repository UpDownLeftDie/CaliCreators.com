import React from 'react';

const LoadingIcon = () => (
  <>
    <i aria-hidden className="fad fa-spinner-third fa-spin" />
    <style jsx>
      {`
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
      `}
    </style>
  </>
);

export default LoadingIcon;
