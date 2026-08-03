import styles from './extralife-member-buttons.module.css';

type Links = {
  donate?: string;
  stream?: string;
};

const emptyLinks: Links = {};

type Props = {
  links?: Links;
  isStreamLive?: boolean;
  isColumnLayout?: boolean;
};

function MemberButton({
  href,
  text,
  variantClass,
}: Readonly<{href: string; text: string; variantClass: string}>) {
  return (
    <a
      href={href}
      className={`${styles.memberButton} ${variantClass}`}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
}

export default function ExtraLifeMemberButtons({
  links = emptyLinks,
  isStreamLive = false,
  isColumnLayout = false,
}: Readonly<Props>) {
  if (links.donate === undefined && links.stream === undefined) {
    return null;
  }

  const donateButton =
    links.donate === undefined || links.donate === '' ? null : (
      <MemberButton
        href={links.donate}
        text="Donate"
        variantClass={styles.donate}
      />
    );

  let twitchButton = null;
  if (
    !isStreamLive &&
    typeof links.stream === 'string' &&
    links.stream !== ''
  ) {
    const match = /channel=(?<channel>.*)/v.exec(links.stream);
    const channel = match?.groups?.channel;
    if (typeof channel === 'string' && channel !== '') {
      twitchButton = (
        <MemberButton
          href={`https://www.twitch.tv/${channel}`}
          text="Twitch"
          variantClass={styles.twitch}
        />
      );
    }
  }

  if (donateButton === null && twitchButton === null) {
    return null;
  }

  return (
    <div
      className={`${styles.buttonContainer} ${isColumnLayout ? styles.column : ''}`}
    >
      {twitchButton}
      {donateButton}
    </div>
  );
}
