import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
const {bool} = PropTypes;
import {useEffect, useRef} from 'react';
import styles from './collapse-arrow.module.css';

const INITIAL_DEG = 0;
const ROTATED_DEG = -90;

function CollapseArrow({isCollapsed}) {
  const deg = isCollapsed ? ROTATED_DEG : INITIAL_DEG;
  const ref = useRef();
  const previousCollapsed = useRef(isCollapsed);

  useEffect(() => {
    if (previousCollapsed.current === isCollapsed) {
      return;
    }

    const start = isCollapsed ? INITIAL_DEG : ROTATED_DEG;
    const end = isCollapsed ? ROTATED_DEG : INITIAL_DEG;
    previousCollapsed.current = isCollapsed;
    ref.current?.animate(
      [{transform: `rotate(${start}deg)`}, {transform: `rotate(${end}deg)`}],
      {
        duration: 300,
        easing: 'linear',
      },
    );
  }, [isCollapsed]);

  return (
    <span
      ref={ref}
      className={styles.arrow}
      style={{transform: `rotate(${deg}deg)`}}
    >
      <FontAwesomeIcon icon={faAngleDown} aria-label="Collapse/Expand" />
    </span>
  );
}

CollapseArrow.defaultProps = {
  isCollapsed: false,
};
CollapseArrow.propTypes = {
  isCollapsed: bool,
};

export default CollapseArrow;
