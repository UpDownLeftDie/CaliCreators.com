import Link from "next/link";
import Image from "next/image";
import { string, shape } from "prop-types";
import extraLifeIcon from "../../public/extralife-icon.png";

import styles from "./charity-banner.module.css";

function CharityBanner({ charity }) {
  const { url } = charity;
  const image = charity.image === "extralife" ? extraLifeIcon : charity.image;
  if (!url) return null;
  const isInternalLink = !url.toLowerCase().startsWith("http");

  function WrapperLink({ children }) {
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

CharityBanner.propTypes = {
  charity: shape({
    image: string.isRequired,
    url: string.isRequired,
  }).isRequired,
};

export default CharityBanner;