import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

const SocialIcons = ({ links, groupName }) => {
  const icons = links.map((link) => {
    return (
      <a
        href={link.url}
        key={link.site}
        aria-label={`${groupName}'s ${link.site}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`fab fa-${link.site}`} />
      </a>
    );
  });
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
};

SocialIcons.propTypes = {
  links: arrayOf(
    shape({
      url: string.isRequired,
      site: string.isRequired,
    })
  ).isRequired,
  groupName: string.isRequired,
};

export default SocialIcons;
