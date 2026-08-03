import PropTypes from 'prop-types';
const {bool, string} = PropTypes;
import styles from './ribbon.module.css';

function Ribbon({text, color, isLeftSide}) {
  return (
    <div
      className={`${styles.ribbon} ${isLeftSide ? styles.left : styles.right}`}
      style={{
        background: color,
        transform: `rotate(${isLeftSide ? '-' : ''}45deg)`,
      }}
    >
      {text}
    </div>
  );
}

Ribbon.defaultProps = {
  color: '#ec0000',
  isLeftSide: false,
};

Ribbon.propTypes = {
  text: string.isRequired,
  color: string,
  isLeftSide: bool,
};

export default Ribbon;
