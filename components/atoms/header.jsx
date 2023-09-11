import { string } from 'prop-types';

function Header({ title }) {
  return (
    <>
      <h1>{title}</h1>
      <style jsx>
        {`
          h1 {
            font-size: 38px;
            font-size: max(2.5em, 3vw);
            padding: 0;
            margin: 0;
            line-height: 1;
          }
        `}
      </style>
    </>
  );
}

Header.propTypes = {
  title: string.isRequired,
};

export default Header;
