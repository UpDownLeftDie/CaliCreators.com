import { string, bool } from 'prop-types';

function Ribbon({ text, color, leftSide }) {
  const leftOrRight = leftSide ? 'left' : 'right';
  return (
    <>
      <div>{text}</div>
      <style jsx>
        {`
          background: ${color};
          filter: drop-shadow(0px 5px 3px rgba(0, 0, 0, 0.6));
          transform: rotate(${leftSide ? '-' : ''}45deg);
          position: absolute;
          z-index: 1;
          ${leftOrRight}: -31px;
          top: 32px;
          text-align: center;
          width: 150px;
          clip-path: polygon(16% 0%, 84% 0%, 107% 150%, -7% 150%);
        `}
      </style>
    </>
  );
}

Ribbon.defaultProps = {
  color: '#ec0000',
  leftSide: false,
};

Ribbon.propTypes = {
  text: string.isRequired,
  color: string,
  leftSide: bool,
};

export default Ribbon;
