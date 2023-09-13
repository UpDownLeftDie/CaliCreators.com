import Link from "next/link";
import Image from "next/image";
import extraLifeIcon from "../../public/extralife-icon.png";

import styles from "./charity-banner.module.css";
import { ReactNode } from "react";

type Props = {
  charity: {
    internalPage: boolean;
    imageKey: string;
    url: string;
  };
};

function CharityBanner({ charity }: Props) {
  const { url } = charity;
  const image =
    charity.imageKey === "extralife" ? extraLifeIcon : charity.imageKey;
  if (!url) return null;
  const isInternalLink = !url.toLowerCase().startsWith("http");

  function WrapperLink({ children }: { children: ReactNode }) {
    if (isInternalLink) {
      return (
        <Link href={url} className={styles.charityWrapper}>
          {children}
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
        {children}
      </a>
    );
  }

  return (
    <WrapperLink>
      <Image src={image} alt="Extra Life" />
      <span>Extra Life Team</span>
    </WrapperLink>
  );
}

export default CharityBanner;
