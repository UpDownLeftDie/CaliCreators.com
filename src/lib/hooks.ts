import {useState, useLayoutEffect} from 'react';

export default function useElementSize(element = globalThis) {
  const [elementSize, setElementSize] = useState({width: 0, height: 0});
  useLayoutEffect(() => {
    function updateSize() {
      setElementSize({width: element.innerWidth, height: element.innerHeight});
    }

    element.addEventListener('resize', updateSize);
    updateSize();
    return () => {
      element.removeEventListener('resize', updateSize);
    };
  }, [element]);
  return elementSize;
}
