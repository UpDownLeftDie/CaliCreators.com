import PropTypes from 'prop-types';
const {bool, element, shape, string} = PropTypes;
import styles from './card.module.css';
import LoadingIcon from './loading-icon.jsx';
import Ribbon from './ribbon.jsx';

function Card({
  children,
  isLoading,
  backgroundImage,
  ribbon,
  isGlowing,
  isPulsing,
}) {
  const cardInfo = isLoading ? (
    <span className={styles.loadingIcon}>
      <LoadingIcon />
    </span>
  ) : (
    children
  );

  const renderRibbon = ({text, color, isLeftSide = false}) => {
    if (text) {
      return <Ribbon text={text} color={color} isLeftSide={isLeftSide} />;
    }

    return null;
  };

  const className = [
    styles.card,
    isGlowing ? styles.glow : '',
    isPulsing ? styles.pulse : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={className}>
      <span>
        {renderRibbon(ribbon)}
        {cardInfo}
        <span
          className={styles.cardBackground}
          style={{
            backgroundColor: isLoading ? '#444' : '#fff',
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : undefined,
          }}
        />
      </span>
    </span>
  );
}

Card.defaultProps = {
  isLoading: false,
  backgroundImage: '',
  ribbon: {},
  isGlowing: false,
  isPulsing: false,
};

Card.propTypes = {
  children: element.isRequired,
  isLoading: bool,
  backgroundImage: string,
  ribbon: shape({
    text: string,
    color: string,
  }),
  isGlowing: bool,
  isPulsing: bool,
};

export default Card;
