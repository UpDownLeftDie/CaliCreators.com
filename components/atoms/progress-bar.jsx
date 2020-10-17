import { number, string, bool } from 'prop-types';

const ProgressBar = ({
  progress,
  goal,
  height,
  progressText,
  goalText,
  isMoney,
  width,
}) => {
  const percent = ((progress / goal) * 100).toFixed(1);
  let progressTextCombined = null;
  let goalTextCombined = null;

  if (progressText) {
    progressTextCombined = `${progressText} ${isMoney ? '$' : null}${progress}`;
  }
  if (goalText) {
    goalTextCombined = `${goalText} ${isMoney ? '$' : null}${goal}`;
  }

  return (
    <div className="wrapper">
      <div className="progressText">{progressTextCombined}</div>
      <div className="goalText">{goalTextCombined}</div>
      <div className="progressBar">
        <div className="progress" />
      </div>
      <style jsx>
        {`
          .wrapper {
            width: ${width}%;
            max-width: 800px;
          }
          .progressText {
            float: left;
            font-size: 1rem;
            margin-left: 10px;
          }
          .goalText {
            float: right;
            font-size: 1rem;
            margin-right: 10px;
          }
          .progressBar {
            position: relative;
            background: #1a4c6d;
            overflow: hidden;
            height: ${height}px;
            border-radius: 300px;
            width: 100%;
          }
          .progress {
            width: ${percent}%;
            background: #26c2eb;
            height: 100%;
            text-align: right;
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
  isMoney: false,
  width: 100,
};

ProgressBar.propTypes = {
  progress: number,
  goal: number.isRequired,
  height: number,
  progressText: string,
  goalText: string,
  isMoney: bool,
  width: number,
};

export default ProgressBar;
