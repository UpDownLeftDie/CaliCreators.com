import { bool, string, shape } from 'prop-types';

const getButton = (link, text) => (
  <a
    href={link}
    className={`memberButton ${text}`}
    target="_blank"
    rel="noreferrer"
  >
    {text}
    <style jsx>
      {`
        .memberButton {
          width: 100%;
          height: 100%;
          padding: 5px;
          border-radius: 8px;
          box-sizing: border-box;
          min-height: 40px;
          place-items: center;
          font-weight: bold;
          display: grid;
          background: #26c2eb;
          color: #ffffff;
          text-decoration: none !important;
        }
        .Twitch {
          background: #772ce8;
        }
        .Twitch:hover,
        .Twitch:focus {
          background: #541da5;
        }
        .Donate {
          background: #7fd836;
        }
        .Donate:hover {
          background: #47b200;
        }
      `}
    </style>
  </a>
);

const getTwitchButton = (link) => getButton(link, 'Twitch');
const getDonateButton = (link) => getButton(link, 'Donate');

function ExtraLifeMemberButtons({ links, streamIsLive, columnLayout }) {
  if (!links?.donate && !links?.stream) return null;
  const donateButton = links?.donate ? getDonateButton(links.donate) : null;
  let twitchButton = null;
  if (!streamIsLive && links?.stream) {
    const regex = links.stream.match(/channel=(.*)/);
    if (regex?.[1]) {
      twitchButton = getTwitchButton(`https://www.twitch.tv/${regex[1]}`);
    }
  }
  return (
    <div className={`buttonContainer ${columnLayout ? 'column' : ''}`}>
      {twitchButton}
      {donateButton}
      <style jsx>
        {`
          :global(.buttonContainer) {
            margin-top: 5px;
            width: 100%;
            display: grid;
            grid-auto-columns: 1fr 1fr;
            grid-auto-flow: column;
            grid-row: 1;
            grid-column-gap: 7px;
            height: 100%;
          }
          :global(.buttonContainer.column) {
            grid-gap: 7px;
            grid-auto-flow: row;
        }
          }
        `}
      </style>
    </div>
  );
}

ExtraLifeMemberButtons.defaultProps = {
  links: {},
  streamIsLive: false,
  columnLayout: false,
};

ExtraLifeMemberButtons.propTypes = {
  links: shape({
    donate: string,
    stream: string,
  }),
  streamIsLive: bool,
  columnLayout: bool,
};

export default ExtraLifeMemberButtons;
