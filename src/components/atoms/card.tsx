import type {CSSProperties, ReactNode} from 'react';
import styles from './card.module.css';
import LoadingIcon from './loading-icon';
import Ribbon from './ribbon';
import type {RibbonConfig} from './ribbon-config';

const emptyRibbons: RibbonConfig[] = [];

type BackgroundImageProps = {
  src: string;
  fetchPriority?: 'high' | 'auto';
  width?: number;
  height?: number;
};

type Props = {
  children?: ReactNode;
  isLoading?: boolean;
  /** CSS background-image URL (Extra Life content cards). */
  backgroundImage?: string;
  /** LCP-friendly img background (group cards). */
  backgroundImg?: BackgroundImageProps;
  ribbon?: RibbonConfig[];
  isGlowing?: boolean;
  isPulsing?: boolean;
  className?: string;
  variant?: 'default' | 'group';
};

function CardBackground({
  isLoading,
  backgroundImage,
  backgroundImg,
  hasMediaOverlay,
}: Readonly<{
  isLoading: boolean;
  backgroundImage: string;
  backgroundImg?: BackgroundImageProps;
  hasMediaOverlay: boolean;
}>) {
  const backgroundClass = [
    styles.cardBackground,
    hasMediaOverlay ? styles.mediaBackground : '',
  ]
    .filter(Boolean)
    .join(' ');

  if (backgroundImg !== undefined) {
    const fetchPriority = backgroundImg.fetchPriority ?? 'auto';
    return (
      <div className={backgroundClass}>
        <img
          className={styles.cardImage}
          src={backgroundImg.src}
          alt=""
          width={backgroundImg.width ?? 500}
          height={backgroundImg.height ?? 600}
          decoding="async"
          fetchPriority={fetchPriority}
          loading={fetchPriority === 'high' ? 'eager' : 'lazy'}
        />
      </div>
    );
  }

  const style: CSSProperties = {
    backgroundColor: isLoading ? '#444' : '#fff',
    backgroundImage:
      backgroundImage === '' ? undefined : `url(${backgroundImage})`,
  };

  return <div className={backgroundClass} style={style} />;
}

export default function Card({
  children,
  isLoading = false,
  backgroundImage = '',
  backgroundImg,
  ribbon = emptyRibbons,
  isGlowing = false,
  isPulsing = false,
  className = '',
  variant = 'default',
}: Readonly<Props>) {
  const cardClassName = [
    styles.card,
    variant === 'group' ? styles.group : '',
    isGlowing ? styles.glow : '',
    isPulsing ? styles.pulse : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = isLoading ? (
    <span className={styles.loadingIcon}>
      <LoadingIcon />
    </span>
  ) : (
    children
  );

  return (
    <div className={cardClassName}>
      {ribbon.map((item: RibbonConfig) => {
        const {text, color, isLeftSide} = item;
        if (text === undefined || text === '') {
          return null;
        }

        return (
          <Ribbon
            key={`${text}-${isLeftSide === true ? 'left' : 'right'}`}
            text={text}
            color={color}
            isLeftSide={isLeftSide}
          />
        );
      })}
      {content}
      <CardBackground
        isLoading={isLoading}
        backgroundImage={backgroundImage}
        backgroundImg={backgroundImg}
        hasMediaOverlay={backgroundImg !== undefined}
      />
    </div>
  );
}
