import {faSpinnerThird} from '@fortawesome/pro-duotone-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSyncExternalStore} from 'react';
import styles from './loading-icon.module.css';

const emptySubscribe = () => () => {
  // No external store; client-only gate for Font Awesome.
};

export default function LoadingIcon() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  if (!isClient) {
    return null;
  }

  return (
    <span className={styles.icon}>
      <FontAwesomeIcon spin icon={faSpinnerThird} />
    </span>
  );
}
