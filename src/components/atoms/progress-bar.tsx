import {useEffect, useRef, type CSSProperties} from 'react';
import styles from './progress-bar.module.css';

type Props = {
  progress?: number;
  goal?: number;
  height?: number;
  progressText?: string;
  goalText?: string;
  isInlineText?: boolean;
  isMoney?: boolean;
  isDisplayProgress?: boolean;
  isDisplayPercent?: boolean;
  width?: number;
  isLoading?: boolean;
};

function formatValue(value: number, isMoney: boolean): string {
  if (isMoney) {
    return `$${Math.floor(value)}`;
  }

  return String(value);
}

function buildLabeledText(
  label: string | undefined,
  value: number | undefined,
  isMoney: boolean,
  isLoading: boolean,
): string | undefined {
  if (label === undefined) {
    return undefined;
  }

  if (isLoading || value === undefined) {
    return '\u{00A0}';
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
}: {
  progress: number | undefined;
  percent: number;
  isMoney: boolean;
  isDisplayProgress: boolean;
  isDisplayPercent: boolean;
  isLoading: boolean;
}): string | undefined {
  if (!isDisplayProgress) {
    return undefined;
  }

  if (isLoading) {
    return '??';
  }

  if (isDisplayPercent) {
    return `${percent}%`;
  }

  if (progress === undefined) {
    return undefined;
  }

  return formatValue(progress, isMoney);
}

export default function ProgressBar({
  progress,
  goal,
  height = 40,
  progressText,
  goalText,
  isInlineText = false,
  isMoney = false,
  isDisplayProgress = false,
  isDisplayPercent = true,
  width = 100,
  isLoading: isLoadingProp = false,
}: Readonly<Props>) {
  const hasValidGoal = typeof goal === 'number' && goal > 0;
  const hasValidProgress = typeof progress === 'number';
  const isLoading = isLoadingProp || !hasValidGoal || !hasValidProgress;

  let percent = 0;
  if (hasValidGoal && hasValidProgress) {
    const raw = Number(((progress / goal) * 100).toFixed(1));
    percent = Number.isFinite(raw) ? raw : 0;
  }

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.animate([{width: '0%'}, {width: `${percent}%`}], {
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
          style={
            {
              width: `${percent}%`,
              backgroundSize: `${height / 2}px ${height / 2}px`,
              '--barber-shift': `${height}px`,
            } as CSSProperties
          }
        />
      </div>
    </div>
  );
}
