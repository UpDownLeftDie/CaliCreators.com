import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinnerThird } from "@fortawesome/pro-duotone-svg-icons";

function LoadingIcon() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return;

  return (
    <>
      <FontAwesomeIcon icon={faSpinnerThird} spin />
      <style jsx>
        {`
          .fad {
            display: block;
          }
          .fad.fa-spinner-third:after {
            position: relative;
            top: 4.4px;
          }
          .fad:before {
            top: 4.4px;
          }
        `}
      </style>
    </>
  );
}

export default LoadingIcon;
