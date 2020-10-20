import { useRef, useEffect, useState } from 'react';
import { element, bool } from 'prop-types';

const Collapsible = ({ children, isCollapsed }) => {
  const growRef = useRef();
  const measureRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (measureRef.current) {
      const measureHeight = measureRef.current.offsetHeight;
      // let width  = measureRef.current.offsetWidth;
      setHeight(measureHeight);
    }
  }, [growRef]);
  return (
    <div ref={growRef} className="collapsible">
      <div ref={measureRef} className="measure">
        {children}
      </div>
      <style jsx>
        {`
          .collapsible {
            transition: height 300ms;
            overflow: hidden;
            height: ${isCollapsed ? '0' : height}px;
          }
        `}
      </style>
    </div>
  );
};

Collapsible.propTypes = {
  children: element.isRequired,
  isCollapsed: bool.isRequired,
};

export default Collapsible;
