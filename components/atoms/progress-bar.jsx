import { number, string, bool } from 'prop-types';

const ProgressBar = ({
  progress,
  goal,
  height,
  progressText,
  goalText,
  inlineText,
  isMoney,
  displayProgress,
  displayPercent,
  width,
}) => {
  const percent = ((progress / goal) * 100).toFixed(1);
  let progressTextCombined = null;
  let goalTextCombined = null;

  if (progressText || progressText === '') {
    progressTextCombined = `${progressText} ${isMoney ? '$' : ''}${progress}`;
  }
  if (goalText || goalText === '') {
    goalTextCombined = `${goalText} ${isMoney ? '$' : ''}${goal}`;
  }
  let barProgressText = null;
  if (displayProgress) {
    let str = `${percent}%`;
    if (!displayPercent) str = `${isMoney ? '$' : ''}${progress}`;
    barProgressText = (
      <span>
        {str}
        <style jsx>
          {`
            position: absolute;
          `}
        </style>
      </span>
    );
  }
  const text = (
    <>
      <div className="progressText">{progressTextCombined}</div>
      <div className="goalText">{goalTextCombined}</div>
      <style jsx>
        {`
          .progressText {
            position: ${inlineText ? 'absolute' : 'relative'};
            font-size: 1rem;
            margin-left: 10px;
            z-index: 1;
            justify-self: start;
          }
          .goalText {
            position: ${inlineText ? 'absolute' : 'relative'};
            font-size: 1rem;
            margin-right: 10px;
            z-index: 1;
            justify-self: end;
          }
        `}
      </style>
    </>
  );
  return (
    <div className={`wrapper ${inlineText ? 'inlineText' : ''}`}>
      {inlineText ? null : text}
      <div className="progressBar">
        {inlineText ? text : null}
        {barProgressText}
        <div className="progress" />
      </div>
      <style jsx>
        {`
          .wrapper {
            width: ${width}%;
            max-width: 800px;
            position: relative;
            display: grid;
            grid-template:
              'a b'
              'bar bar';
          }
          .wrapper.inlineText {
            display: block;
          }
          .progressBar {
            position: relative;
            grid-area: bar;
            background: #1a4c6d;
            overflow: hidden;
            height: ${height}px;
            border-radius: 300px;
            width: 100%;
            display: grid;
            place-items: center;

            font-size: 90%;
            color: #fff;
            text-shadow: 0 0 5px black;
          }
          .progress {
            width: ${percent}%;
            background: #26c2eb;
            height: 100%;
            text-align: right;
            justify-self: start;
            background-image: linear-gradient(
              -45deg,
              rgba(255, 255, 255, 0.17) 25%,
              transparent 25%,
              transparent 50%,
              rgba(255, 255, 255, 0.17) 50%,
              rgba(255, 255, 255, 0.17) 75%,
              transparent 75%
            );
            background-size: ${height / 2}px ${height / 2}px;
            overflow: hidden;
            animation: barberpole 2s linear infinite;
          }

          @keyframes barberpole {
            100% {
              background-position: ${height}px 0;
            }
          }
        `}
      </style>
    </div>
  );
};

ProgressBar.defaultProps = {
  progress: 0,
  height: 40,
  progressText: null,
  goalText: null,
  inlineText: false,
  isMoney: false,
  width: 100,
  displayProgress: false,
  displayPercent: true,
};

ProgressBar.propTypes = {
  progress: number,
  goal: number.isRequired,
  height: number,
  progressText: string,
  goalText: string,
  inlineText: bool,
  isMoney: bool,
  width: number,
  displayProgress: bool,
  displayPercent: bool,
};

export default ProgressBar;
