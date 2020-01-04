const CharityBanner = props => {
  const { charity } = props;
  if (!charity) return null;
  const { url } = charity;
  if (!url) return null;

  return (
    <>
      <div>Extra-Life Team</div>
      <style jsx>
        {`
          background: #ffffff;
          border-radius: 20px;
        `}
      </style>
    </>
  );
};
export default CharityBanner;
