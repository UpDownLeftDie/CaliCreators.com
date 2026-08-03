import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useEffect, useRef} from 'react';
import styles from './collapse-arrow.module.css';

const INITIAL_DEG = 0;
const ROTATED_DEG = -90;

type Props = {
  isCollapsed?: boolean;
};

export default function CollapseArrow({isCollapsed = false}: Readonly<Props>) {
  const deg = isCollapsed ? ROTATED_DEG : INITIAL_DEG;
  const ref = useRef<HTMLSpanElement>(null);
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
      aria-hidden="true"
    >
      <FontAwesomeIcon icon={faAngleDown} />
    </span>
  );
}
