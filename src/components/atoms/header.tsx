import styles from './header.module.css';

type Props = {
  title: string;
};

export default function Header({title}: Readonly<Props>) {
  return <h1 className={styles.title}>{title}</h1>;
}
