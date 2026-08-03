import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bool } from "prop-types";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const INITIAL_DEG = 0;
const ROTATED_DEG = -90;

function CollapseArrow({ isCollapsed }) {
  const deg = isCollapsed ? ROTATED_DEG : INITIAL_DEG;
  const ref = useRef();
  const prevCollapsed = useRef(isCollapsed);

  useEffect(() => {
    if (prevCollapsed.current === isCollapsed) return;
    const start = isCollapsed ? INITIAL_DEG : ROTATED_DEG;
    const end = isCollapsed ? ROTATED_DEG : INITIAL_DEG;
    prevCollapsed.current = isCollapsed;
    ref.current?.animate(
      [
        { transform: `rotate(${start}deg)` },
        { transform: `rotate(${end}deg)` },
      ],
      {
        duration: 300,
        easing: "linear",
      },
    );
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
