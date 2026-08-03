import Image from "next/image";
import Link from "next/link";

import styles from "./charity-banner.module.css";

type Props = {
	charity: {
		internalPage: boolean;
		imageKey: string;
		url: string;
	};
};

function CharityBanner({ charity }: Readonly<Props>) {
  const { url } = charity;
  const image =
    charity.imageKey === "extralife"
      ? "/extralife-icon.png"
      : charity.imageKey;
  if (!url) return null;
  const isInternalLink = !url.toLowerCase().startsWith("http");

  const content = (
    <>
      <Image src={image} alt="Extra Life" width={254} height={213} />
      <span>Extra Life Team</span>
    </>
  );

  if (isInternalLink) {
    return (
      <Link href={url} className={styles.charityWrapper}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={styles.charityWrapper}
    >
      {content}
    </a>
  );
}

export default CharityBanner;
