import PropTypes from 'prop-types';
const {string} = PropTypes;
import styles from './header.module.css';

function Header({title}) {
  return <h1 className={styles.title}>{title}</h1>;
}

Header.propTypes = {
  title: string.isRequired,
};

export default Header;
