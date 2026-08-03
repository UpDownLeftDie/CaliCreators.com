import LoadingIcon from '../atoms/loading-icon.jsx';
import Ribbon from '../atoms/ribbon.jsx';
import CharityBanner from '../molecules/charity-banner';
import SocialIcons from '../molecules/social-icons.jsx';
import styles from './group-card.module.css';

const soonWindowMs = 8 * 24 * 60 * 60 * 1000;

function dayOrdinal(day: number): string {
  if (day % 10 === 1 && day !== 11) {
    return 'st';
  }

  if (day % 10 === 2 && day !== 12) {
    return 'nd';
  }

  if (day % 10 === 3 && day !== 13) {
    return 'rd';
  }

  return 'th';
}

function formatEventDate(startDate: string): string {
  const date = new Date(startDate);
  if (Number.isNaN(date.getTime())) {
    return 'Click here for updates';
  }

  const day = date.getDate();
  const month = new Intl.DateTimeFormat('en-US', {month: 'short'}).format(date);
  return `${month} ${day}${dayOrdinal(day)} ${date.getFullYear()}`;
}

function isWithinSoonWindow(startDate: string): boolean {
  const start = new Date(startDate).getTime();
  if (Number.isNaN(start)) {
    return false;
  }

  return start < Date.now() + soonWindowMs;
}

type GroupLinks = {
  twitter?: string;
  discord?: string;
  instagram?: string;
  twitch?: string;
};

type NextEvent = {
  url: string;
  start_date: string;
  title: string;
};

type GroupData = {
  url: string;
  imagePath: string;
  links: GroupLinks;
  name: string;
  nextEvent?: NextEvent;
  charity?: {
    internalPage: boolean;
    url: string;
    imageKey: string;
  };
};

type Props = {
  isLoading: boolean;
  totalCards: number;
  position: number;
  group: GroupData;
};

type ResolvedEvent = {
  title: string;
  date: string;
  url: string;
};

function resolveImageSrc(imagePath: string): string | undefined {
  if (imagePath === '') {
    return undefined;
  }

  return `/${imagePath}`;
}

function resolveNextEvent(
  group: GroupData,
  isLoading: boolean,
): {nextEvent: ResolvedEvent; isStartingSoon: boolean} {
  const fallback: ResolvedEvent = {
    title: 'TBA',
    date: 'Click here for updates',
    url: isLoading ? '#' : group.url,
  };

  const event = group.nextEvent;
  if (event === undefined || event.url === '') {
    return {nextEvent: fallback, isStartingSoon: false};
  }

  const {url, title, start_date: startDate} = event;
  const isStartingSoon = isWithinSoonWindow(startDate);

  return {
    isStartingSoon,
    nextEvent: {
      title,
      date: formatEventDate(startDate),
      url: isLoading ? '#' : url,
    },
  };
}

function renderRibbon(isStartingSoon: boolean) {
  if (isStartingSoon) {
    return <Ribbon text="Soon!" />;
  }

  return null;
}

function CardBackground({
  imageSrc,
  fetchPriority,
}: Readonly<{
  imageSrc: string | undefined;
  fetchPriority: 'high' | 'auto';
}>) {
  return (
    <span className={styles.cardBackground}>
      {imageSrc === undefined ? null : (
        <img
          className={styles.cardImage}
          src={imageSrc}
          alt=""
          width={500}
          height={600}
          decoding="async"
          fetchPriority={fetchPriority}
          // First card is LCP — never lazy-load it
          loading={fetchPriority === 'high' ? 'eager' : 'lazy'}
        />
      )}
    </span>
  );
}

function GroupCard({group, isLoading, totalCards, position}: Readonly<Props>) {
  const imageSrc = resolveImageSrc(group.imagePath);
  const fetchPriority = position === 1 ? 'high' : 'auto';

  if (isLoading) {
    return (
      <span className={styles.cardContainer}>
        <div className={styles.card}>
          <span className={styles.loadingIcon}>
            <LoadingIcon />
          </span>
          <CardBackground imageSrc={imageSrc} fetchPriority={fetchPriority} />
        </div>
      </span>
    );
  }

  const isLast = position === totalCards;
  const socialIcons =
    group.name === '' ? null : (
      <SocialIcons links={group.links} groupName={group.name} />
    );
  const {nextEvent, isStartingSoon} = resolveNextEvent(group, isLoading);
  const {charity} = group;
  const charityBanner =
    charity !== undefined && charity.url !== '' ? (
      <CharityBanner charity={charity} />
    ) : null;
  const lastCardClass = isLast ? ` ${styles.lastCard}` : '';
  const glowClass = isStartingSoon ? ` ${styles.glow}` : '';

  return (
    <span className={`${styles.cardContainer}${lastCardClass}`}>
      {charityBanner}
      <a href={nextEvent.url} className={styles.cardLink}>
        <div className={`${styles.card}${glowClass}`}>
          {renderRibbon(isStartingSoon)}
          <div className={styles.cardInfo}>
            <h4>Next Event</h4>
            <h3>{group.name}</h3>
            <h5 className={styles.eventTitle}>{nextEvent.title}</h5>
            <span className={styles.eventDate}>{nextEvent.date}</span>
          </div>
          <CardBackground imageSrc={imageSrc} fetchPriority={fetchPriority} />
        </div>
      </a>
      {socialIcons}
    </span>
  );
}

export default GroupCard;
