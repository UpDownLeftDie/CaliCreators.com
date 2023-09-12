import { shape, string } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitter,
  faTwitch,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const brands = {
  discord: faDiscord,
  twitter: faTwitter,
  twitch: faTwitch,
  instagram: faInstagram,
};

const siteUrls = {
  twitter: "https://www.twitter.com",
  twitch: "https://www.twitch.tv",
  discord: "https://discord.gg",
  instagram: "https://www.instagram.com",
};

function SocialIcons({ links, groupName }) {
  const icons = Object.entries(links).map((link) => (
    <a
      href={`${siteUrls[link[0]]}/${link[1]}`}
      key={link[0]}
      aria-label={`${groupName}'s ${link[0]}`}
      title={link[0].charAt(0).toUpperCase() + link[0].slice(1)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={brands[link[0]]} />
    </a>
  ));
  return (
    <div className="socialicons">
      {icons}
      <style jsx>
        {`
          .socialicons {
            display: flex;
            justify-content: space-around;
            font-size: 36px;
            padding: 10px;
          }

          @supports not (-ms-ime-align: auto) {
            justify-content: space-evenly !important;
          }
          .socialicons :global(a) {
            color: #fff;
            text-decoration: none;
            transition: transform 150ms cubic-bezier(0, 0, 0.2, 1);
          }
          .socialicons :global(a):hover {
            transform: scale(1.3);
          }
          @media (max-width: 900px) {
            .socialicons {
              padding: 0 10px;
            }
          }
        `}
      </style>
    </div>
  );
}

SocialIcons.propTypes = {
  links: shape({
    twitter: string.isRequired,
    instagram: string,
    discord: string,
    twitch: string,
  }).isRequired,
  groupName: string.isRequired,
};

export default SocialIcons;
