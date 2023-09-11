import { useRef, useState, useLayoutEffect } from "react";
import { element, bool } from "prop-types";
import useElementSize from "../../src/hooks";

function Collapsible({ children, isCollapsed }) {
  const collapseRef = useRef();
  const measureRef = useRef();
  const [height, setHeight] = useState("auto");
  const windowSize = useElementSize(window);

  useLayoutEffect(() => {
    if (measureRef.current?.offsetHeight) {
      const measureHeight = measureRef.current.offsetHeight;
      // stupid hack to fix race condition(?) on getting offsetHeight correctly
      // without it, measureHeight was short by 126px on initial render
      setTimeout(() => setHeight(`${measureHeight}px`), 250);
    }
  }, [windowSize.width, measureRef.current?.offsetHeight]);

  return (
    <div
      ref={collapseRef}
      className={`collapsible ${isCollapsed ? "collapsed" : ""}`}
    >
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
