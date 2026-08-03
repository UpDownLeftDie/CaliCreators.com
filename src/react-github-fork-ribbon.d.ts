declare module 'react-github-fork-ribbon' {
  type Color = 'red' | 'orange' | 'black' | 'green';
  type Position = 'right' | 'left' | 'left-bottom' | 'right-bottom';
  export type GitHubForkRibbonProps = {
    children: ReactNode;
    href: HTMLAnchorElement['href'];
    target?: HTMLAnchorElement['target'];
    position?: Position;
    color?: Color;
  };

  export default class GitHubForkRibbon extends React.Component<GitHubForkRibbonProps> {}
}
