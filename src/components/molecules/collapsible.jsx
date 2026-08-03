import PropTypes from 'prop-types';
const {bool, element} = PropTypes;
import {useLayoutEffect, useRef, useState} from 'react';
import styles from './collapsible.module.css';

function Collapsible({children, isCollapsed}) {
  const measureRef = useRef(null);
  const [height, setHeight] = useState('auto');

  useLayoutEffect(() => {
    const measureElement = measureRef.current;
    if (measureElement === null) {
      return;
    }

    const updateHeight = () => {
      const measureHeight = measureElement.offsetHeight;
      if (!measureHeight) {
        return;
      }

      setHeight(`${measureHeight}px`);
    };

    // Delay initial measure to avoid a race where offsetHeight is short
    const timeoutId = setTimeout(updateHeight, 250);
    const observer = new globalThis.ResizeObserver(updateHeight);
    observer.observe(measureElement);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  const collapsedClass = isCollapsed ? ` ${styles.collapsed}` : '';

  return (
    <div
      className={`${styles.collapsible}${collapsedClass}`}
      style={isCollapsed ? undefined : {height}}
    >
      <div ref={measureRef}>{children}</div>
    </div>
  );
}

Collapsible.propTypes = {
  children: element.isRequired,
  isCollapsed: bool.isRequired,
};

export default Collapsible;
