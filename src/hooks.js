import { useState, useLayoutEffect } from 'react';

export default function useElementSize(element = window) {
  const [elementSize, setWindowSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize({ width: element.innerWidth, height: element.innerHeight });
    }
    element.addEventListener('resize', updateSize);
    updateSize();
    return () => element.removeEventListener('resize', updateSize);
  }, []);
  return elementSize;
}
