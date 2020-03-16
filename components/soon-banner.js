const SoonBanner = () => {
  return (
    <>
      <div>Soon!</div>
      <style jsx>
        {`
          background: #ec0000;
          filter: drop-shadow(0px 5px 3px rgba(0, 0, 0, 0.6));
          transform: rotate(45deg);
          position: absolute;
          z-index: 1;
          right: -31px;
          top: 32px;
          text-align: center;
          width: 150px;
          clip-path: polygon(16% 0%, 84% 0%, 107% 150%, -7% 150%);
        `}
      </style>
    </>
  );
};
export default SoonBanner;
