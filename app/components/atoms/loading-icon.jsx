import { useSyncExternalStore } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinnerThird } from "@fortawesome/pro-duotone-svg-icons";

const emptySubscribe = () => () => {};

function LoadingIcon() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  if (!isClient) return null;

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
