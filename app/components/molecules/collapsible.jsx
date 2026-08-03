import { bool, element } from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

function Collapsible({ children, isCollapsed }) {
  const measureRef = useRef(null);
  const [height, setHeight] = useState("auto");

  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    const updateHeight = () => {
      const measureHeight = el.offsetHeight;
      if (!measureHeight) return;
      setHeight(`${measureHeight}px`);
    };

    // Delay initial measure to avoid a race where offsetHeight is short
    const timeoutId = setTimeout(updateHeight, 250);
    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`collapsible ${isCollapsed ? "collapsed" : ""}`}>
      <div ref={measureRef} className="measure">
        {children}
      </div>
      <style jsx>
        {`
          .collapsible {
            transition: height 350ms;
            overflow: hidden;
            box-sizing: border-box;
            height: ${height};
          }
          .collapsed {
            height: 0px;
          }
        `}
      </style>
    </div>
  );
}

Collapsible.propTypes = {
  children: element.isRequired,
  isCollapsed: bool.isRequired,
};

export default Collapsible;
