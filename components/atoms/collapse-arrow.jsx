import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bool } from "prop-types";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function CollapseArrow({ isCollapsed }) {
  const initialDeg = 0;
  const rotatedDeg = -90;
  const [deg, setDeg] = useState(initialDeg);
  const ref = useRef();

  useEffect(() => {
    if ((isCollapsed && !deg) || (!isCollapsed && deg)) {
      let start = initialDeg;
      let end = rotatedDeg;
      if (isCollapsed && !deg) {
        setDeg(rotatedDeg);
      } else if (!isCollapsed && deg) {
        start = rotatedDeg;
        end = initialDeg;
        setDeg(initialDeg);
      }
      ref.current.animate(
        [
          { transform: `rotate(${start}deg)` },
          { transform: `rotate(${end}deg)` },
        ],
        {
          duration: 300,
          easing: "linear",
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCollapsed]);

  return (
    <span ref={ref}>
      <FontAwesomeIcon icon={faAngleDown} title="Collapse/Expand" />
      <style jsx>
        {`
          display: inline-block;
          transform: rotate(${deg}deg);
        `}
      </style>
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
