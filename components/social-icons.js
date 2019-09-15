import React from 'react'

const SocialIcons = ({links}) => {

    const icons = links.map(link => {
        return (
            <a href={link.href} key={link.site} target="_blank">
                <i className={`fab fa-${link.site}`} />
            </a>
        );
    })
  return (
    <div className="socialicons">
      { icons }
      <style jsx>{`
        .socialicons {
            display: flex;
            place-content: space-evenly;
            font-size: 36px;
            padding: 10px;
        }
        .socialicons :global(a) {
            color: #fff;
            text-decoration: none;
            transition: transform 200ms;
        }
        .socialicons :global(a):hover {
            transform: scale(1.2);
        }
        @media (max-width: 840px) {
            .socialicons {
                padding: 0 10px 35px;
            }
        }
      `}</style>
    </div>
  )
};

export default SocialIcons
