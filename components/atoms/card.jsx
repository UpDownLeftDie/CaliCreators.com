import React from 'react';
import { string, bool, shape, element } from 'prop-types';
import LoadingIcon from './loading-icon';
import Ribbon from './ribbon';

const Card = ({ children, loading, backgroundImage, ribbon, isGlowing }) => {
  const bgImgStr = backgroundImage
    ? `background-img: url(${backgroundImage});`
    : '';
  const cardInfo = loading ? (
    <>
      <span className="loadingIcon">
        <LoadingIcon />
      </span>
      <style jsx>
        {`
          .loadingIcon {
            position: absolute;
            font-size: 100px;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
          }
        `}
      </style>
    </>
  ) : (
    children
  );

  const renderRibbon = ({ text, color }) => {
    if (text) return <Ribbon text={text} color={color} />;
    return null;
  };

  return (
    <span className={`card${isGlowing ? ' glow' : ''}`}>
      {renderRibbon(ribbon)}
      {cardInfo}
      <span className="card-background" />
      <style jsx>
        {`
          a:link {
            text-decoration: none;
          }
          .card {
            position: relative;
            padding: 15px;
            margin: 10px;
            color: #fff;
            text-decoration: none;
            transition: all 150ms, transform 150ms cubic-bezier(0, 0, 0.2, 1);
            filter: drop-shadow(0 5px 3px rgba(0, 0, 0, 0.4))
              drop-shadow(0 -4px 3px rgba(0, 0, 0, 0.3));
            border-radius: 20px
            word-break: break-word;
          }
          .glow {
            animation: fadein 1.5s ease-out infinite alternate;
          }
          @keyframes fadein {
            from {
              filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.2));
            }
            to {
              filter: drop-shadow(0 0 25px rgba(255, 255, 255, 1));
            }
          }
          .card::after {
            content: '';
            border-radius: 20px;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            filter: drop-shadow(0 8px 6px rgba(0, 0, 0, 0.3))
              drop-shadow(0 0px 6px rgba(0, 0, 0, 0.2));
            opacity: 0;
            transition: all 150ms, transform 150ms cubic-bezier(0, 0, 0.2, 1);
          }
          .card:hover {
            transform: scale(1.06);
            -webkit-font-smoothing: subpixel-antialiased;
          }
          .card:hover::after {
            opacity: 1;
          }
          .card-background {
            background: ${loading ? '#444' : '#fff'};
            ${bgImgStr}
            background-size: cover;
            background-position: center;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            border-radius: 20px;
            z-index: -100;
            top: 0;
          }
          .card-background:before {
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            border-radius: 20px;
          }
        `}
      </style>
    </span>
  );
};

Card.defaultProps = {
  loading: false,
  backgroundImage: '',
  ribbon: {},
  isGlowing: false,
};

Card.propTypes = {
  children: element.isRequired,
  loading: bool,
  backgroundImage: string,
  ribbon: shape({
    text: string,
    color: string,
  }),
  isGlowing: bool,
};

export default Card;
