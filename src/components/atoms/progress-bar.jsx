import PropTypes from 'prop-types';
const {number, string, bool} = PropTypes;
import {useRef, useEffect} from 'react';
import styles from './progress-bar.module.css';

function formatValue(value, isMoney) {
  if (isMoney) {
    return `$${Math.floor(value)}`;
  }

  return value;
}

function buildLabeledText(label, value, isMoney, isLoading) {
  if (label === null || label === undefined) {
    return null;
  }

  if (isLoading) {
    return <>&nbsp;</>;
  }

  return `${label} ${formatValue(value, isMoney)}`;
}

function buildBarProgressText({
  progress,
  percent,
  isMoney,
  isDisplayProgress,
  isDisplayPercent,
  isLoading,
}) {
  if (!isDisplayProgress) {
    return null;
  }

  if (isLoading) {
    return '??';
  }

  if (isDisplayPercent) {
    return `${percent}%`;
  }

  return formatValue(progress, isMoney);
}

function ProgressBar({
  progress,
  goal,
  height,
  progressText,
  goalText,
  isInlineText,
  isMoney,
  isDisplayProgress,
  isDisplayPercent,
  width,
  isLoading: isLoadingProp,
}) {
  const percent = Number(((progress / goal) * 100).toFixed(1)) || 0;
  const isLoading = isLoadingProp || progress === null || goal === null;

  const ref = useRef();

  useEffect(() => {
    ref.current.animate([{width: '0%'}, {width: `${percent}%`}], {
      duration: 1500,
    });
  }, [percent]);

  const progressTextCombined = buildLabeledText(
    progressText,
    progress,
    isMoney,
    isLoading,
  );
  const goalTextCombined = buildLabeledText(goalText, goal, isMoney, isLoading);
  const barProgressText = buildBarProgressText({
    progress,
    percent,
    isMoney,
    isDisplayProgress,
    isDisplayPercent,
    isLoading,
  });

  const textPosition = isInlineText ? styles.inline : styles.relative;
  const text = (
    <>
      <div className={`${styles.progressText} ${textPosition}`}>
        {progressTextCombined}
      </div>
      <div className={`${styles.goalText} ${textPosition}`}>
        {goalTextCombined}
      </div>
    </>
  );

  const inlineClass = isInlineText ? styles.inlineText : '';

  return (
    <div
      className={`${styles.wrapper} ${inlineClass}`}
      style={{width: `${width}%`}}
    >
      {isInlineText ? null : text}
      <div className={styles.progressBar} style={{height: `${height}px`}}>
        {isInlineText ? text : null}
        {isDisplayProgress ? (
          <span style={{position: 'absolute'}}>{barProgressText}</span>
        ) : null}
        <div
          ref={ref}
          className={styles.progress}
          style={{
            width: `${percent}%`,
            backgroundSize: `${height / 2}px ${height / 2}px`,
            '--barber-shift': `${height}px`,
          }}
        />
      </div>
    </div>
  );
}

ProgressBar.defaultProps = {
  progress: null,
  goal: null,
  height: 40,
  progressText: null,
  goalText: null,
  isInlineText: false,
  isMoney: false,
  width: 100,
  isDisplayProgress: false,
  isDisplayPercent: true,
  isLoading: false,
};

ProgressBar.propTypes = {
  progress: number,
  goal: number,
  height: number,
  progressText: string,
  goalText: string,
  isInlineText: bool,
  isMoney: bool,
  width: number,
  isDisplayProgress: bool,
  isDisplayPercent: bool,
  isLoading: bool,
};

export default ProgressBar;
