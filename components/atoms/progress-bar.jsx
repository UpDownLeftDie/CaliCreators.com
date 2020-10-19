import { number, string, bool } from 'prop-types';
import { useRef, useEffect } from 'react';

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
  loading,
}) => {
  const percent = Number(((progress / goal) * 100).toFixed(1)) || 0;
  const isLoading = loading || progress === null || goal === null;
  const showProgressText = progressText || progressText === '';
  const showGoalText = goalText || goalText === '';
  let progressTextCombined = null;
  let goalTextCombined = null;

  const ref = useRef();

  useEffect(() => {
    ref.current.animate([{ width: '0%' }, { width: `${percent}%` }], {
      duration: 1500,
    });
  }, [percent]);

  if (showProgressText) {
    progressTextCombined = `${progressText} `;
    if (isMoney) {
      progressTextCombined += `$${Math.floor(progress)}`;
    } else {
      progressTextCombined += progress;
    }
  }
  if (showGoalText) {
    goalTextCombined = `${goalText} `;
    if (isMoney) {
      goalTextCombined += `$${Math.floor(goal)}`;
    } else {
      goalTextCombined += goal;
    }
  }
  let barProgressText = null;
  if (displayProgress) {
    barProgressText = `${percent}%`;
    if (!displayPercent) {
      barProgressText = progress;
      if (isMoney) barProgressText = `$${Math.floor(progress)}`;
    }
  }

  if (isLoading) {
    if (showProgressText) progressTextCombined = <>&nbsp;</>;
    if (showGoalText) goalTextCombined = <>&nbsp;</>;
    if (displayProgress) barProgressText = '??';
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
        {displayProgress && (
          <span style={{ position: 'absolute' }}>{barProgressText}</span>
        )}
        <div ref={ref} className="progress" />
      </div>
      <style jsx>
        {`
          .wrapper {
            width: ${width}%;
            min-width: 180px;
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
  progress: null,
  goal: null,
  height: 40,
  progressText: null,
  goalText: null,
  inlineText: false,
  isMoney: false,
  width: 100,
  displayProgress: false,
  displayPercent: true,
  loading: false,
};

ProgressBar.propTypes = {
  progress: number,
  goal: number,
  height: number,
  progressText: string,
  goalText: string,
  inlineText: bool,
  isMoney: bool,
  width: number,
  displayProgress: bool,
  displayPercent: bool,
  loading: bool,
};

export default ProgressBar;
