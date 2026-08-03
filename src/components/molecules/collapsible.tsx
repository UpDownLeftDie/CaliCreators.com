import {type ReactNode, useLayoutEffect, useRef, useState} from 'react';
import styles from './collapsible.module.css';

type Props = {
  children: ReactNode;
  isCollapsed: boolean;
};

export default function Collapsible({children, isCollapsed}: Readonly<Props>) {
  const measureRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('auto');

  useLayoutEffect(() => {
    const measureElement = measureRef.current;
    if (measureElement === null) {
      return;
    }

    const updateHeight = () => {
      const measureHeight = measureElement.offsetHeight;
      if (measureHeight === 0) {
        return;
      }

      setHeight(`${measureHeight}px`);
    };

    // Delay initial measure to avoid a race where offsetHeight is short
    const timeoutId = setTimeout(updateHeight, 250);
    const observer = new ResizeObserver(updateHeight);
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
