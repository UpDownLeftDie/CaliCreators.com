import styles from './ribbon.module.css';

export type {RibbonConfig} from './ribbon-config';

type Props = {
  text: string;
  color?: string;
  isLeftSide?: boolean;
};

export default function Ribbon({
  text,
  color = '#ec0000',
  isLeftSide = false,
}: Readonly<Props>) {
  return (
    <div
      className={`${styles.ribbon} ${isLeftSide ? styles.left : styles.right}`}
      style={{
        background: color,
        transform: `rotate(${isLeftSide ? '-' : ''}45deg)`,
      }}
    >
      {text}
    </div>
  );
}
